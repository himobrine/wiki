(function () {
  'use strict';

  /* === 页面无关性 === */
  // 当前页面到站点根目录的前缀（posts/、tags/ 下需要 ../）
  function rootPrefix() {
    var base = window.location.pathname.split('/');
    var last = base[base.length - 1];
    if (base.length >= 2) {
      var dir = base[base.length - 2];
      if (dir === 'posts' || dir === 'tags') return '../';
      if (last !== 'index.html' && last !== 'graph.html' && last !== 'links.html' && base.length >= 3) return '../';
    }
    return '';
  }

  var PREFIX = rootPrefix();

  // 结果链接：POSTS_DATA[i].url 形如 posts/xxx.html 或 xxx.html
  function hrefOf(p) {
    var u = p.url || '';
    if (u.indexOf('http') === 0) return u;      // 绝对链接
    if (u.indexOf('posts/') === 0) return PREFIX + u;
    return PREFIX + 'posts/' + u.replace(/^\/+/, '');
  }

  function dataReady() {
    return !!window.POSTS_DATA;
  }

  function renderPosts(list, container) {
    if (!container) {
      container = document.getElementById('searchResults');
      if (!container) {
        container = document.createElement('section');
        container.id = 'searchResults';
        container.className = 'mk-section mk-search-results';
        container.style.display = 'none';
        var main = document.querySelector('.mk-container') || document.body;
        main.appendChild(container);
      }
    }
    if (!list.length) {
      container.innerHTML = '<div class="mk-bento-tile fade-up" style="text-align:center;padding:var(--mk-space-2xl);color:var(--mk-faint)">未找到匹配的文章</div>';
    } else {
      var html = '';
      list.forEach(function (p) {
        var spanClass = window.innerWidth >= 960 ? 'mk-bento-tile mk-bento-tile--span-4' : 'mk-bento-tile';
        var tags = [];
        try { tags = getFlatTags(p); } catch (e) { tags = [].concat(p.tags || []); }
        var tagHtml = '';
        tags.forEach(function (t) {
          var tc = TAG_COLORS[t] || '888888';
          tagHtml += '<a href="' + PREFIX + 'tags/list.html?tag=' + encodeURIComponent(t) + '" class="mk-tag" style="--tag-color:#' + tc + '">#' + t + '</a>';
        });
        html += '<article class="' + spanClass + ' fade-up">';
        html += '<time class="mk-post-date">' + p.date + '</time>';
        html += '<h3 class="mk-post-title"><a href="' + hrefOf(p) + '">' + p.title + '</a></h3>';
        html += '<div class="mk-post-tags">' + tagHtml + '</div>';
        html += '<p class="mk-post-excerpt">' + p.excerpt + '</p>';
        html += '<a href="' + hrefOf(p) + '" class="mk-read-more">[ + ] READ MORE &rarr;</a>';
        html += '</article>';
      });
      container.innerHTML = html;
    }
    container.style.display = 'block';
    // 隐藏片段的 LATEST / TAGS 标题区
    document.querySelectorAll('section.mk-section > header.mk-section-head h2').forEach(function (h2) {
      var txt = h2.textContent || '';
      if (txt.indexOf('LATEST') > -1 || txt.indexOf('TAGS') > -1 || txt.indexOf('关系图谱') > -1) {
        var sec = h2.closest('section');
        if (sec && sec.id !== 'searchResults') sec.style.display = 'none';
      }
    });
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  var query = (new URLSearchParams(window.location.search).get('q') || '').trim().toLowerCase();

  function runSearch(q, container) {
    if (!q) return;
    // 1. 标签匹配（最精确）
    var tagMatches = [];
    try {
      tagMatches = POSTS_DATA.filter(function (p) {
        return getFlatTags(p).some(function (t) { return t.toLowerCase().indexOf(q) > -1; });
      });
    } catch (e) { /* posts 数据结构异常时跳过标签级 */ }
    if (tagMatches.length) { renderPosts(tagMatches, container); return; }
    // 2. 标题全文匹配
    var headingMatches = [], contentMatches = [];
    POSTS_DATA.forEach(function (p) {
      if ((p.title || '').toLowerCase().indexOf(q) > -1 || (p.excerpt || '').toLowerCase().indexOf(q) > -1) {
        contentMatches.push(p);
      }
    });
    if (contentMatches.length) renderPosts(contentMatches, container);
    else renderPosts([], container);
  }

  // 实时搜索：绑定输入框
  function bindLive() {
    var input = document.querySelector('.mk-search-input[name="q"]');
    if (!input) return;
    ['input', 'search'].forEach(function (ev) {
      input.addEventListener(ev, function () {
        runSearch(input.value.trim().toLowerCase());
      });
    });
    var form = input.closest('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runSearch(input.value.trim().toLowerCase());
      });
    }
  }

  // 若查询参数存在且数据已就绪则直接搜索；否则等待数据就绪后执行
  function onData() {
    bindLive();
    if (query) runSearch(query);
  }

  if (dataReady()) {
    onData();
  } else {
    var base = document.currentScript && document.currentScript.src
      ? document.currentScript.src.replace(/[^/]*$/, '')
      : '';
    var s = document.createElement('script');
    s.src = base + 'posts-data.js';
    s.onload = onData;
    (document.head || document.body).appendChild(s);
  }
})();
