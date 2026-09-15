(function () {
  'use strict';

  var STORAGE_KEY = 'mk-ai-config';
  var MSG_KEY = 'mk-ai-messages';

  var defaultConfig = { apiUrl: '', model: '', apiKey: '' };
  var config = loadConfig();
  var messages = loadMessages();
  var isOpen = false;
  var isStreaming = false;

  function loadConfig() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || Object.assign({}, defaultConfig); }
    catch (e) { return Object.assign({}, defaultConfig); }
  }
  function saveConfig() { localStorage.setItem(STORAGE_KEY, JSON.stringify(config)); }
  function loadMessages() {
    try { return JSON.parse(localStorage.getItem(MSG_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveMessages() { localStorage.setItem(MSG_KEY, JSON.stringify(messages)); }

  var root = document.getElementById('mkAiAssistant');
  if (!root) return;

  var toggle = root.querySelector('.mk-ai-toggle');
  var panel = root.querySelector('.mk-ai-panel');
  var msgContainer = panel.querySelector('.mk-ai-messages');
  var input = panel.querySelector('.mk-ai-input-field');
  var sendBtn = panel.querySelector('.mk-ai-send');
  var settingsBtn = panel.querySelector('.mk-ai-settings-btn');
  var closeBtn = panel.querySelector('.mk-ai-close');
  var clearBtn = panel.querySelector('.mk-ai-clear');
  var settingsPanel = panel.querySelector('.mk-ai-settings');
  var settingsSave = panel.querySelector('.mk-ai-settings-save');
  var settingsCancels = panel.querySelectorAll('.mk-ai-settings-cancel');
  var api_url = panel.querySelector('.mk-ai-api-url');
  var api_model = panel.querySelector('.mk-ai-api-model');
  var api_key = panel.querySelector('.mk-ai-api-key');
  var statusDot = panel.querySelector('.mk-ai-status-dot');
  var statusText = panel.querySelector('.mk-ai-status-text');

  /* === Render existing messages === */
  messages.forEach(function (m) { appendMessage(m.role, m.content, false); });
  scrollBottom();

  /* === Toggle panel === */
  toggle.addEventListener('click', function () {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    toggle.classList.toggle('active', isOpen);
    if (isOpen) { input.focus(); scrollBottom(); }
  });

  closeBtn.addEventListener('click', function () {
    isOpen = false;
    panel.classList.remove('open');
    toggle.classList.remove('active');
  });

  /* === Settings === */
  settingsBtn.addEventListener('click', function () {
    api_url.value = config.apiUrl;
    api_model.value = config.model;
    api_key.value = config.apiKey;
    settingsPanel.classList.add('visible');
  });

  settingsCancels.forEach(function (btn) {
    btn.addEventListener('click', function () {
      settingsPanel.classList.remove('visible');
    });
  });

  settingsSave.addEventListener('click', function () {
    config.apiUrl = api_url.value.replace(/\/+$/, '');
    config.model = api_model.value.trim();
    config.apiKey = api_key.value.trim();
    saveConfig();
    settingsPanel.classList.remove('visible');
    updateStatus();
  });

  /* === Clear === */
  clearBtn.addEventListener('click', function () {
    messages = [];
    saveMessages();
    msgContainer.innerHTML = '';
    appendSystem('对话已清空。');
  });

  /* === Send === */
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  function sendMessage() {
    var text = input.value.trim();
    if (!text || isStreaming) return;

    if (!config.apiUrl || !config.model) {
      appendSystem('请先在设置中配置 API 地址和模型名称。');
      settingsPanel.classList.add('visible');
      return;
    }

    input.value = '';
    input.style.height = 'auto';
    appendMessage('user', text);
    messages.push({ role: 'user', content: text });

    isStreaming = true;
    sendBtn.disabled = true;
    toggleLoading(true);

    var apiMessages = [{ role: 'system', content: '你是一个有帮助的AI助手，擅长回答信息安全、编程、逆向工程、CTF等方面的问题。请用中文回答。' }]
      .concat(messages);

    fetch(config.apiUrl + '/api/chat', {
      method: 'POST',
      headers: Object.assign(
        { 'Content-Type': 'application/json' },
        config.apiKey ? { 'Authorization': 'Bearer ' + config.apiKey } : {}
      ),
      body: JSON.stringify({ model: config.model, messages: apiMessages, stream: true })
    }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      var reader = res.body.getReader();
      var decoder = new TextDecoder();
      var assistantEl = appendMessage('assistant', '');
      var buffer = '';
      var fullText = '';

      function read() {
        return reader.read().then(function (result) {
          if (result.done) {
            toggleLoading(false);
            isStreaming = false;
            sendBtn.disabled = false;
            messages.push({ role: 'assistant', content: fullText });
            saveMessages();
            input.focus();
            return;
          }
          buffer += decoder.decode(result.value, { stream: true });
          var lines = buffer.split('\n');
          buffer = lines.pop();
          lines.forEach(function (line) {
            line = line.trim();
            if (!line) return;
            try {
              var obj = JSON.parse(line);
              if (obj.message && obj.message.content) {
                fullText += obj.message.content;
                assistantEl.querySelector('.mk-ai-msg-text').innerHTML = renderMd(fullText);
                scrollBottom();
              }
            } catch (e) {}
          });
          return read();
        });
      }
      return read();
    }).catch(function (err) {
      toggleLoading(false);
      isStreaming = false;
      sendBtn.disabled = false;
      appendSystem('请求失败: ' + err.message);
    });
  }

  /* === DOM helpers === */
  function appendMessage(role, text, animate) {
    if (animate === undefined) animate = true;
    var div = document.createElement('div');
    div.className = 'mk-ai-msg ' + role;
    var bubble = document.createElement('div');
    bubble.className = 'mk-ai-msg-bubble';
    var label = document.createElement('div');
    label.className = 'mk-ai-msg-label';
    label.textContent = role === 'user' ? '你' : 'AI';
    var content = document.createElement('div');
    content.className = 'mk-ai-msg-text';
    content.innerHTML = role === 'assistant' ? renderMd(text) : escapeHtml(text);
    bubble.appendChild(label);
    bubble.appendChild(content);
    div.appendChild(bubble);
    msgContainer.appendChild(div);
    if (animate) scrollBottom();
    return div;
  }

  function appendSystem(text) {
    var div = document.createElement('div');
    div.className = 'mk-ai-msg system';
    var bubble = document.createElement('div');
    bubble.className = 'mk-ai-msg-bubble';
    var content = document.createElement('div');
    content.className = 'mk-ai-msg-text';
    content.textContent = text;
    bubble.appendChild(content);
    div.appendChild(bubble);
    msgContainer.appendChild(div);
    scrollBottom();
  }

  function toggleLoading(on) {
    var ld = panel.querySelector('.mk-ai-loading');
    if (ld) ld.classList.toggle('visible', on);
  }

  function scrollBottom() {
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function updateStatus() {
    var ok = config.apiUrl && config.model;
    statusDot.className = 'mk-ai-status-dot' + (ok ? ' ok' : '');
    statusText.textContent = ok ? (config.model) : '未配置';
  }

  /* === Markdown (lightweight) === */
  function renderMd(text) {
    var s = escapeHtml(text);
    s = s.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="lang-$1">$2</code></pre>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\n/g, '<br>');
    return s;
  }

  function escapeHtml(text) {
    var d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }

  /* === Auto-resize textarea === */
  input.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  });

  updateStatus();
  appendSystem('你好！我是 AI 助手。请在设置中配置 API 地址和模型后开始对话。');
})();
