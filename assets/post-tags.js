(function () {
  'use strict';

  var el = document.querySelector('.mk-post-tags');
  if (!el) return;

  var SECTION_META = {
    category: { label: '分类', fallback: '#888888' },
    knowledge: { label: '知识点', fallback: '#8b5cf6' },
    tools: { label: '工具', fallback: '#00d4ff' }
  };

  function colorOf(name, section) {
    var hex = (typeof TAG_COLORS !== 'undefined' && TAG_COLORS[name]) || null;
    if (!hex) hex = (SECTION_META[section] && SECTION_META[section].fallback) || '888888';
    return '#' + hex;
  }

  function chip(name, section) {
    var a = document.createElement('a');
    a.href = '../tags/list.html?tag=' + encodeURIComponent(name);
    a.className = 'mk-tag';
    if (section && SECTION_META[section]) a.className += ' mk-tag--' + section;
    var hex = colorOf(name, section);
    a.style.background = hex + '22';
    a.style.color = hex;
    a.style.border = '1px solid ' + hex + '44';
    a.textContent = name;
    return a;
  }

  function findPost() {
    var path = location.pathname.split('/').pop();
    if (!Array.isArray(window.POSTS_DATA)) return null;
    for (var i = 0; i < POSTS_DATA.length; i++) {
      var base = (POSTS_DATA[i].url || '').split('/').pop();
      if (base === path) return POSTS_DATA[i];
    }
    return null;
  }

  function render() {
    var p = findPost();
    if (!p) return;
    var t = (p.tags && typeof p.tags === 'object') ? p.tags : {};
    var order = ['category', 'knowledge', 'tools'];
    var keep = [];
    order.forEach(function (sec) {
      var arr = [].concat(t[sec] || []);
      arr.forEach(function (name) {
        if (name && keep.indexOf(name) === -1) keep.push([name, sec]);
      });
    });
    if (!keep.length) return;
    var span = document.createElement('span');
    span.className = 'mk-post-tags-label';
    span.textContent = 'TAGS // ';
    el.appendChild(span);
    keep.forEach(function (pair) {
      el.appendChild(chip(pair[0], pair[1]));
    });
  }

  if (window.POSTS_DATA) {
    render();
  } else {
    var base = document.currentScript && document.currentScript.src
      ? document.currentScript.src.replace(/[^/]*$/, '')
      : '';
    var s = document.createElement('script');
    s.src = base + 'posts-data.js';
    s.onload = render;
    (document.head || document.body).appendChild(s);
  }
})();
