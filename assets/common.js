(function () {
  'use strict';

  /* === Sticky Nav === */
  var sentinel = document.getElementById('mkNavSentinel');
  var navWrap = document.getElementById('mkNavWrap');
  var spacer = null;
  if (sentinel && navWrap) {
    var navObs = new IntersectionObserver(function (e) {
      var stuck = !e[0].isIntersecting;
      navWrap.classList.toggle('fixed', stuck);
      if (stuck && !spacer) {
        spacer = document.createElement('div');
        spacer.style.height = navWrap.offsetHeight + 'px';
        navWrap.parentNode.insertBefore(spacer, navWrap.nextSibling);
      } else if (!stuck && spacer) {
        spacer.remove();
        spacer = null;
      }
    }, { threshold: [0] });
    navObs.observe(sentinel);
  }

  /* === Scroll Animations === */
  var animObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        animObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(function (el) { animObserver.observe(el); });

  /* === Theme Switching === */
  var html = document.documentElement;
  var themeBtn = document.getElementById('mkThemeToggle');
  var themeDock = document.getElementById('mkThemeDock');

  if (html && themeBtn && themeDock) {
    var themeIcons = { black: '■', white: '□', elysia: '◇', rei: '▽' };
    var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    var qToggle = 'white';

    function setTheme(t) {
      html.setAttribute('data-theme', t);
      localStorage.setItem('mk-theme', t);
      themeBtn.textContent = themeIcons[t] || '■';
      document.querySelectorAll('.mk-themedock-item').forEach(function (el) {
        el.classList.toggle('active', el.dataset.theme === t);
      });
      if (t === 'black') qToggle = 'white';
      else if (t === 'white') qToggle = 'black';
      else if (t === 'elysia') qToggle = 'black';
      else if (t === 'rei') qToggle = 'black';
    }

    var saved = localStorage.getItem('mk-theme') || 'black';
    setTheme(saved);

    document.querySelectorAll('.mk-themedock-item').forEach(function (el) {
      el.addEventListener('click', function () {
        setTheme(el.dataset.theme);
        themeDock.classList.remove('visible');
      });
    });

    themeBtn.addEventListener('click', function () {
      if (isTouch) {
        themeDock.classList.toggle('visible');
      } else {
        setTheme(qToggle);
        themeDock.classList.remove('visible');
      }
    });

    if (!isTouch) {
      var dockTimer;
      function showDock() { clearTimeout(dockTimer); themeDock.classList.add('visible'); }
      function hideDock() { dockTimer = setTimeout(function () { themeDock.classList.remove('visible'); }, 100); }
      themeBtn.addEventListener('mouseenter', showDock);
      themeBtn.addEventListener('mouseleave', hideDock);
      themeDock.addEventListener('mouseenter', showDock);
      themeDock.addEventListener('mouseleave', hideDock);
    }

    document.addEventListener('click', function (e) {
      if (!themeDock.contains(e.target) && e.target !== themeBtn) themeDock.classList.remove('visible');
    });
  }

  /* === Back to Top === */
  var topBtn = document.getElementById('mkBackToTop');
  if (topBtn) {
    topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    var topObs = new IntersectionObserver(function (e) {
      topBtn.classList.toggle('show', !e[0].isIntersecting);
    }, { threshold: [0] });
    var sentinelEl = document.getElementById('mkNavSentinel');
    if (sentinelEl) topObs.observe(sentinelEl);
  }

  /* === WebP Detection + Auto-switch === */
  (function () {
    var img = new Image();
    img.onload = function () {
      document.querySelectorAll('img[src$=".png"]').forEach(function (el) {
        var ws = el.getAttribute('src');
        if (ws.indexOf('.png') > -1) {
          el.setAttribute('src', ws.replace(/\.png$/, '.webp'));
          el.addEventListener('error', function () { this.setAttribute('src', ws); });
        }
      });
    };
    img.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRsB8wAZ';
  })();

  /* === Image Lightbox (zoom + pan) === */
  (function () {
    var overlay = document.createElement('div');
    overlay.className = 'img-lightbox';
    overlay.innerHTML = '<img class="lightbox-img" alt="enlarged">';
    var lightboxImg = overlay.querySelector('.lightbox-img');
    document.body.appendChild(overlay);

    var scale = 1, tx = 0, ty = 0;
    var isPanning = false, startX = 0, startY = 0, startTx = 0, startTy = 0;

    function reset() { scale = 1; tx = 0; ty = 0; applyTransform(); }
    function applyTransform() {
      lightboxImg.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
    }

    function open(src) {
      lightboxImg.src = src;
      reset();
      overlay.classList.add('visible');
      document.body.classList.add('lightbox-open');
    }
    function close() {
      overlay.classList.remove('visible');
      document.body.classList.remove('lightbox-open');
      reset();
    }

    function doZoom(newScale, cx, cy) {
      var oldScale = scale;
      scale = Math.max(1, Math.min(10, newScale));
      if (cx !== undefined && cy !== undefined) {
        var imgRect = lightboxImg.getBoundingClientRect();
        var originX = cx - imgRect.left - imgRect.width / 2;
        var originY = cy - imgRect.top - imgRect.height / 2;
        tx = originX - (originX - tx) * (scale / oldScale);
        ty = originY - (originY - ty) * (scale / oldScale);
      }
      applyTransform();
    }

    document.querySelectorAll('.mk-post-content img').forEach(function (el) {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        open(this.getAttribute('src'));
      });
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('visible')) close();
    });

    overlay.addEventListener('wheel', function (e) {
      if (!overlay.classList.contains('visible')) return;
      e.preventDefault();
      var dir = e.deltaY > 0 ? -1 : 1;
      doZoom(scale * (dir > 0 ? 1.12 : 1 / 1.12), e.clientX, e.clientY);
    }, { passive: false });

    lightboxImg.addEventListener('mousedown', function (e) {
      if (scale <= 1) return;
      isPanning = true;
      startX = e.clientX; startY = e.clientY;
      startTx = tx; startTy = ty;
      lightboxImg.classList.add('grabbing');
      e.preventDefault();
    });
    document.addEventListener('mousemove', function (e) {
      if (!isPanning) return;
      tx = startTx + (e.clientX - startX);
      ty = startTy + (e.clientY - startY);
      applyTransform();
    });
    document.addEventListener('mouseup', function () {
      if (isPanning) { isPanning = false; lightboxImg.classList.remove('grabbing'); }
    });

    var touches = [], lastDist = 0, lastCX = 0, lastCY = 0;
    overlay.addEventListener('touchstart', function (e) {
      if (!overlay.classList.contains('visible')) return;
      touches = Array.prototype.slice.call(e.touches);
      if (touches.length === 2) {
        e.preventDefault();
        var t1 = touches[0], t2 = touches[1];
        lastDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        lastCX = (t1.clientX + t2.clientX) / 2;
        lastCY = (t1.clientY + t2.clientY) / 2;
      } else if (touches.length === 1 && scale > 1) {
        startX = touches[0].clientX;
        startY = touches[0].clientY;
        startTx = tx; startTy = ty;
        isPanning = true;
      }
    }, { passive: false });
    overlay.addEventListener('touchmove', function (e) {
      if (!overlay.classList.contains('visible')) return;
      touches = Array.prototype.slice.call(e.touches);
      if (touches.length === 2) {
        e.preventDefault();
        var t1 = touches[0], t2 = touches[1];
        var dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        var cx = (t1.clientX + t2.clientX) / 2;
        var cy = (t1.clientY + t2.clientY) / 2;
        var newScale = Math.max(1, Math.min(10, scale * (dist / lastDist)));
        var imgRect = lightboxImg.getBoundingClientRect();
        var ox = cx - imgRect.left - imgRect.width / 2;
        var oy = cy - imgRect.top - imgRect.height / 2;
        var ratio = newScale / scale;
        tx = ox - (ox - tx) * ratio + (cx - lastCX);
        ty = oy - (oy - ty) * ratio + (cy - lastCY);
        scale = newScale;
        applyTransform();
        lastDist = dist; lastCX = cx; lastCY = cy;
      } else if (touches.length === 1 && scale > 1) {
        tx = startTx + (touches[0].clientX - startX);
        ty = startTy + (touches[0].clientY - startY);
        applyTransform();
      }
    }, { passive: false });
    overlay.addEventListener('touchend', function () { isPanning = false; });
  })();
})();
