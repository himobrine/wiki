(function () {
  'use strict';

  // 引用 / 反链区块属于正文的收尾内容，必须排在页脚之前（页脚是阅读页最后一个区块）。
  // 页面里两个挂载点写在哪里都行，这里统一搬到页脚上方；没有页脚的老文章保持原位。
  function relocate() {
    var refs = document.getElementById('postReferences');
    var back = document.getElementById('postBacklinks');
    var footer = document.querySelector('.mk-footer, .footer');
    if (!refs || !back || !footer || !footer.parentNode) return;
    footer.parentNode.insertBefore(refs, footer);
    footer.parentNode.insertBefore(back, footer);
  }

  function render() {
    var me = currentPost();
    if (!me || !me.id) return;
    var myId = me.id;

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

  relocate();
  if (window.POSTS_DATA && window.POSTS_BY_ID && window.BACKLINKS) render();
})();
