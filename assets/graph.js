(function () {
  'use strict';

  var c = document.getElementById('graphContainer');
  if (!c || typeof vis === 'undefined' || typeof POSTS === 'undefined') return;

  var PC = (typeof PRIMARY_COLORS !== 'undefined' && PRIMARY_COLORS)
    || (typeof window !== 'undefined' && window.PRIMARY_COLORS) || {};

  // ===== 权重与连接规则 =====
  var TAG_W = { category: 1, knowledge: 3, tools: 2 };   // 分类=1 知识点=3 工具=2
  // 固定泛化词（枢纽）：仅提供弱连接（权重1）
  var BASE_HUB = ['学习笔记', '渗透测试', '调试', '底层原理', 'CVE', '靶场搭建', '安全工具', 'KaliLinux'];
  var HUB_FANOUT = 15;                                     // 超出该使用数视为泛化枢纽词

  function tagWeights(p) {
    var t = (p && p.tags && typeof p.tags === 'object') ? p.tags : {};
    var w = {};
    function add(arr, k) { (arr || []).forEach(function (x) { w[x] = TAG_W[k]; }); }
    add(t.category, 'category');
    add(t.knowledge, 'knowledge');
    add(t.tools, 'tools');
    return w;
  }
  // 两篇共享标签，返回 {list, total}；list 每项 {tag, w, isHub}
  function shared(a, b) {
    var wa = tagWeights(a), wb = tagWeights(b), out = [], total = 0;
    for (var x in wa) {
      if (wb[x] !== undefined) {
        var isHub = hubSet[x] === true;
        var wgt = isHub ? 1 : Math.min(wa[x], wb[x]);
        out.push({ tag: x, w: wgt, isHub: isHub });
        total += wgt;
      }
    }
    return { list: out, total: total };
  }
  // 默认直连判定：含知识点(权重≥3) 或 ≥2 个不同共享标签
  function allowsEdge(s) {
    var hasK = false, distinct = 0;
    for (var i = 0; i < s.list.length; i++) {
      if (!s.list[i].isHub && s.list[i].w >= 3) hasK = true;
      if (s.list[i].w >= 1) distinct++;
    }
    return (hasK || distinct >= 2);
  }

  // ===== 节点渲染 =====
  function gc(p) {
    var t = (PC[p.primary] || '888888');
    return { background: '#' + t, border: '#' + t, highlight: { background: '#d4a020', border: '#d4a020' } };
  }
  function gsh(p) {
    var s = p.secondary;
    if (s === 'DVWA' || s === 'Pwn' || s === 'Crack' || s === '基础') return 'dot';
    if (s === 'upload-labs' || s === 'Reverse') return 'square';
    if (s === 'Crypto' || s === '工具') return 'diamond';
    if (s === 'Web') return 'triangle';
    return 'dot';
  }

  // 推导 hub set：固定泛化词 + 使用度达阈值的标签
  var usage = {}, hubSet = {};
  POSTS.forEach(function (p) {
    var w = tagWeights(p);
    for (var t in w) usage[t] = (usage[t] || 0) + 1;
  });
  BASE_HUB.forEach(function (h) { hubSet[h] = true; });
  for (var u in usage) { if (usage[u] >= HUB_FANOUT) hubSet[u] = true; }

  // 文章页：pathname 匹配某 POST 文件名 → 单篇放射图；index/tags/graph 页 → 全站图
  var isFullPage = window.location.pathname.split('/').pop() === 'graph.html';
  var f = window.location.pathname.split('/').pop();
  var currentIdx = -1;
  for (var i = 0; i < POSTS.length; i++) {
    if ((POSTS[i].url || '').indexOf(f) !== -1) { currentIdx = i; break; }
  }

  var nodes, edges, network;

  function clickNav(params) {
    if (params.nodes.length > 0) {
      var node = nodes.get(params.nodes[0]);
      if (node && node.url) window.location.href = node.url;
    }
  }

  // ===== 单篇放射图（文章页侧边栏）=====
  if (currentIdx !== -1 && !isFullPage) {
    var connected = [currentIdx], wt = {};
    for (var i1 = 0; i1 < POSTS.length; i1++) {
      if (i1 === currentIdx) continue;
      var s = shared(POSTS[currentIdx], POSTS[i1]);
      if (allowsEdge(s) && s.total >= 2) { connected.push(i1); wt[i1] = s.total; }
    }
    var nodeArr = [];
    for (var k = 0; k < connected.length; k++) {
      var idx = connected[k];
      if (idx === currentIdx) {
        nodeArr.push({ id: idx, title: POSTS[idx].title, url: POSTS[idx].url, size: 16, x: 0, y: 0, color: gc(POSTS[idx]), shape: gsh(POSTS[idx]) });
      } else {
        var angle = -Math.PI / 2 + 2 * Math.PI * (k - 1) / (connected.length - 1);
        nodeArr.push({ id: idx, title: POSTS[idx].title, url: POSTS[idx].url, size: 7 + Math.min(wt[idx] || 0, 6), x: 130 * Math.cos(angle), y: 130 * Math.sin(angle), color: gc(POSTS[idx]), shape: gsh(POSTS[idx]) });
      }
    }
    nodes = new vis.DataSet(nodeArr);
    var edgeArr = [], seen = {};
    for (var a = 0; a < connected.length; a++) {
      for (var b = a + 1; b < connected.length; b++) {
        var ia = connected[a], ib = connected[b];
        var sa = shared(POSTS[ia], POSTS[ib]);
        if (!allowsEdge(sa) || sa.total < 2) continue;
        var key = ia + '-' + ib;
        if (seen[key]) continue;
        seen[key] = true;
        var tags = sa.list.map(function (x) { return x.tag; });
        edgeArr.push({ from: ia, to: ib, value: Math.min(sa.total, 5), width: 0.8 + sa.total * 0.25,
          title: '权重 ' + sa.total + ' 共享: ' + tags.join(', '),
          color: { inherit: 'both', opacity: Math.min(0.25 + sa.total * 0.12, 0.9) } });
      }
    }
    edges = new vis.DataSet(edgeArr);
    network = new vis.Network(c, { nodes: nodes, edges: edges }, {
      nodes: { shape: 'dot', borderWidth: 0, borderWidthSelected: 2, font: { size: 0 } },
      edges: { width: 1, smooth: { type: 'continuous' } },
      physics: false,
      interaction: { hover: true, tooltipDelay: 200, zoomView: true, dragView: true }
    });
    network.on('click', clickNav);
    network.fit({ animation: false });
    return;
  }

  // ===== 全站图公用选项 =====
  var groups = {
    'Web安全': { color: { background: '#3366ff', border: '#3366ff', highlight: { background: '#d4a020', border: '#d4a020' } }, shape: 'dot' },
    'CTF': { color: { background: '#e4405f', border: '#e4405f', highlight: { background: '#d4a020', border: '#d4a020' } }, shape: 'dot' },
    '逆向': { color: { background: '#7b2d8e', border: '#7b2d8e', highlight: { background: '#d4a020', border: '#d4a020' } }, shape: 'dot' },
    'C/C++': { color: { background: '#f59e0b', border: '#f59e0b', highlight: { background: '#d4a020', border: '#d4a020' } }, shape: 'dot' },
    'AI安全': { color: { background: '#00d4ff', border: '#00d4ff', highlight: { background: '#d4a020', border: '#d4a020' } }, shape: 'dot' }
  };
  function baseOptions() {
    return {
      nodes: { shape: 'dot', font: { size: 0 }, borderWidth: 0, borderWidthSelected: 2 },
      groups: groups,
      edges: { width: 1, smooth: { type: 'continuous' } },
      physics: { solver: 'forceAtlas2Based', forceAtlas2Based: { gravitationalConstant: !isFullPage ? -50 : -85, centralGravity: 0.004, springLength: 175, springConstant: 0.01, damping: 0.5 }, stabilization: { iterations: !isFullPage ? 80 : 200 } },
      interaction: { hover: true, tooltipDelay: 200, zoomView: true, dragView: true, hoverConnectedEdges: true }
    };
  }
  function bindNetwork() {
    network.on('click', clickNav);
    network.on('dragStart', function () { network.setOptions({ physics: { enabled: false } }); });
    network.on('hoverNode', function () { network.setOptions({ physics: { enabled: false } }); });
    c.addEventListener('mouseleave', function () { network.setOptions({ physics: { enabled: true } }); });
  }

  // ===== 默认模式：加权直连图 =====
  function buildDefault() {
    var strong = {};
    for (var x = 0; x < POSTS.length; x++) {
      for (var y = x + 1; y < POSTS.length; y++) {
        var s = shared(POSTS[x], POSTS[y]);
        if (allowsEdge(s) && s.total >= 2) strong[x + '-' + y] = s;
      }
    }
    var nArr = POSTS.map(function (p, i) {
      return { id: i, title: p.title, url: p.url, value: 1, size: !isFullPage ? 6 : 8, color: gc(p), group: p.primary, shape: gsh(p) };
    });
    var eArr = [];
    for (var key in strong) {
      var parts = key.split('-');
      var s2 = strong[key];
      eArr.push({ from: +parts[0], to: +parts[1], value: Math.min(s2.total, 5), width: 0.6 + s2.total * 0.18,
        title: '权重 ' + s2.total + ' 共享: ' + s2.list.map(function (z) { return z.tag; }).join(', '),
        color: { inherit: 'both', opacity: Math.min(0.2 + s2.total * 0.1, 0.85) } });
    }
    return { nodes: new vis.DataSet(nArr), edges: new vis.DataSet(eArr) };
  }

  // ===== 枢纽模式：hub-and-spoke 放射大图 =====
  function buildSpoke() {
    // 每个 hub 节点：id 用字符串 'hub:'+tag，颜色统一高亮，尺寸按使用度
    var nArr = POSTS.map(function (p, i) {
      return { id: i, title: p.title, url: p.url, value: 1, size: !isFullPage ? 5 : 7, color: gc(p), group: p.primary, shape: gsh(p) };
    });
    var eArr = [], hubCount = {}, hubIds = {};
    POSTS.forEach(function (p, i) {
      var w = tagWeights(p);
      for (var t in w) { if (hubSet[t]) { hubCount[t] = (hubCount[t] || 0) + 1; } }
    });
    Object.keys(hubCount).sort().forEach(function (t) {
      var id = 'hub:' + t;
      hubIds[t] = id;
      var sz = (!isFullPage ? 8 : 12) + Math.min(Math.round((hubCount[t] - 5) * 0.3), 8);
      nArr.push({ id: id, title: t, url: null, value: hubCount[t], size: sz, color: { background: '#d4a020', border: '#d4a020', highlight: { background: '#ff8c00', border: '#ff8c00' } }, shape: 'star' });
    });
    // 每篇文章 -> 其枢纽标签
    POSTS.forEach(function (p, i) {
      var w = tagWeights(p);
      for (var t in w) {
        if (hubIds[t]) {
          eArr.push({ from: i, to: hubIds[t], width: 0.8,
            title: t, color: { inherit: 'both', opacity: 0.5 } });
        }
      }
    });
    return { nodes: new vis.DataSet(nArr), edges: new vis.DataSet(eArr) };
  }

  var defaultSpoke = !!document.querySelector('#mkGraphSidebar[data-default-spoke]');
  var hubMode = defaultSpoke;
  var data = hubMode ? buildSpoke() : buildDefault();
  nodes = data.nodes; edges = data.edges;
  network = new vis.Network(c, { nodes: nodes, edges: edges }, baseOptions());
  bindNetwork();

  // 切换按钮：graph.html 已有 #mkGraphHubToggle；侧边栏页动态注入一个小按钮到标题区
  var toggle = document.getElementById('mkGraphHubToggle');
  if (!toggle && !isFullPage) {
    var title = document.querySelector('#mkGraphSidebar .mk-graph-title');
    if (title) {
      var link = title.querySelector('a');
      toggle = document.createElement('button');
      toggle.className = 'mk-graph-toggle';
      toggle.type = 'button';
      toggle.textContent = hubMode ? '◈ 枢纽' : '✦ 全部';
      if (hubMode) toggle.classList.add('active');
      if (link) link.after(toggle);
      else title.appendChild(toggle);
    }
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      hubMode = !hubMode;
      toggle.classList.toggle('active', hubMode);
      toggle.textContent = hubMode ? '◈ 枢纽' : '✦ 全部';
      data = hubMode ? buildSpoke() : buildDefault();
      nodes = data.nodes; edges = data.edges;
      network.setData({ nodes: nodes, edges: edges });
      network.setOptions(baseOptions());
      network.redraw();
    });
  }
})();
