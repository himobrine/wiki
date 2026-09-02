(function(){
    // Parse query parameter
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('q');
    if (!raw) return;
    const query = raw.trim().toLowerCase();
    if (!query) return;

    /** Render a list of posts into the search results container */
    function renderPosts(list){
        const container = document.getElementById('searchResults');
        if (!container) return;
        if (!list.length){
            container.innerHTML = '<div class="mk-bento-tile fade-up" style="text-align:center;padding:var(--mk-space-2xl);color:var(--mk-faint)">未找到匹配的文章</div>';
        } else {
            let html = '';
            list.forEach(p => {
                const spanClass = window.innerWidth >= 960 ? 'mk-bento-tile mk-bento-tile--span-4' : 'mk-bento-tile';
                html += `<article class="${spanClass} fade-up">`;
                html += `<time class="mk-post-date">${p.date}</time>`;
                html += `<h3 class="mk-post-title"><a href="${p.url}">${p.title}</a></h3>`;
                html += '<div class="mk-post-tags">';
                p.tags.forEach(t => {
                    const tc = TAG_COLORS[t] || '888888';
                    html += `<a href="tags/list.html?tag=${encodeURIComponent(t)}" class="mk-tag" style="--tag-color:#${tc}">#${t}</a>`;
                });
                html += '</div>';
                html += `<p class="mk-post-excerpt">${p.excerpt}</p>`;
                html += `<a href="${p.url}" class="mk-read-more">[ + ] READ MORE &rarr;</a>`;
                html += '</article>';
            });
            container.innerHTML = html;
        }
        container.style.display = 'block';
        // hide LATEST and TAGS sections when showing results
        document.querySelectorAll('section.mk-section > header.mk-section-head h2').forEach(h2 => {
            if (h2.textContent.includes('LATEST') || h2.textContent.includes('TAGS')) {
                h2.closest('section').style.display = 'none';
            }
        });
    }

    // 1️⃣ Tag match (most specific)
    const tagMatches = POSTS.filter(p => p.tags.some(t => t.toLowerCase().includes(query)));
    if (tagMatches.length){
        renderPosts(tagMatches);
        return;
    }

    // 2️⃣ Heading match → then full content match
    // Load all article HTML (parallel)
    const fetches = POSTS.map(p => fetch(p.url).then(r => r.text()).catch(() => null));
    Promise.all(fetches).then(htmls => {
        const headingMatches = [];
        const contentMatches = [];
        htmls.forEach((html, i) => {
            if (!html) return;
            const p = POSTS[i];
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            // collect headings (h1‑h6)
            const headings = Array.from(doc.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(h => h.textContent.trim().toLowerCase());
            if (headings.some(h => h.includes(query))) {
                headingMatches.push(p);
            } else {
                // full‑text search: body text + title + excerpt
                const bodyText = doc.body ? doc.body.textContent.toLowerCase() : '';
                if (bodyText.includes(query) || p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query)) {
                    contentMatches.push(p);
                }
            }
        });
        if (headingMatches.length) {
            renderPosts(headingMatches);
        } else if (contentMatches.length) {
            renderPosts(contentMatches);
        } else {
            renderPosts([]);
        }
    });
})();