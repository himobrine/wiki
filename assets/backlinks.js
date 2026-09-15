(function () {
  'use strict';

  function render() {
    var path = location.pathname.split('/').pop();
    var myId = null;
    for (var i = 0; i < POSTS_DATA.length; i++) {
      var base = (POSTS_DATA[i].url || '').split('/').pop();
      if (base === path) { myId = POSTS_DATA[i].id; break; }
    }
    if (!myId) return;

    var refs = (POSTS_BY_ID[myId] && POSTS_BY_ID[myId].references) || [];
    renderSection('postReferences', '// REFERENCES', refs);

    var bl = BACKLINKS[myId] || [];
    renderSection('postBacklinks', '// BACKLINKS', bl);
  }

  function renderSection(containerId, title, ids) {
    var el = document.getElementById(containerId);
    if (!el) return;
    if (!ids.length) { el.style.display = 'none'; return; }

    var sorted = sortByDateDesc(ids.slice());
    var html = '<section class="mk-section">';
    html += '<header class="mk-section-head fade-up"><h2>' + title + '</h2></header>';
    html += '<div class="mk-bento">';
    sorted.forEach(function (id) {
      var p = POSTS_BY_ID[id];
      if (!p) return;
      html += '<article class="mk-bento-tile mk-backlink-card fade-up">';
      html += '<div class="mk-backlink-meta">';
      html += '<span class="mk-backlink-date">' + (p.date || '') + '</span>';
      html += '</div>';
      html += '<h3 class="mk-post-title"><a href="../' + p.url + '">' + esc(p.title) + '</a></h3>';
      html += '<div class="mk-backlink-tags">';
      getFlatTags(p).forEach(function (t) {
        var tc = (typeof TAG_COLORS !== 'undefined' && TAG_COLORS[t]) || '888888';
        html += '<a href="../tags/list.html?tag=' + encodeURIComponent(t) + '" class="mk-tag" style="--tag-color:#' + tc + '">#' + esc(t) + '</a>';
      });
      html += '</div>';
      html += '</article>';
    });
    html += '</div></section>';
    el.innerHTML = html;
  }

  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  if (window.POSTS_DATA && window.POSTS_BY_ID && window.BACKLINKS) {
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
