# Design System: MyWiki

## Creative North Star: "Lacquer Lab"

MyWiki is a dark lacquer security research blog marked by gold leaf precision, controlled oxidation, and technical geometry. The interface feels like a crafted instrument: black urushi, kinpaku seams, measurement marks, circuit traces, and verdigris patina.

Four themes span from lacquer black to warm white, from crystalline pink to cold blue-grey — each is a distinct material expression of the same design vocabulary.

---

## 1. Color Tokens

### Black Theme (`data-theme="black"`) — Default

| Token | OKLCH | Role |
|-------|-------|------|
| `--mk-lacquer` | `oklch(7% 0.006 95)` | Page ground |
| `--mk-lacquer-deep` | `oklch(4% 0.004 95)` | Deepest inset |
| `--mk-raised` | `oklch(11% 0.006 95)` | Panels, cards |
| `--mk-graphite` | `oklch(15% 0.008 95)` | Inactive states |
| `--mk-graphite-2` | `oklch(19% 0.008 95)` | One step up |
| `--mk-champagne` | `oklch(91% 0 0)` | Headlines, strong |
| `--mk-text` | `oklch(88% 0 0)` | Body |
| `--mk-muted` | `oklch(72% 0 0)` | Secondary text |
| `--mk-faint` | `oklch(62% 0 0)` | Subdued |
| `--mk-mute-deep` | `oklch(52% 0 0)` | Disabled |
| `--mk-gold` | `oklch(84% 0.19 80.46)` | Primary accent |
| `--mk-gold-rich` | `oklch(77% 0.13 82)` | Active CTA |
| `--mk-gold-deep` | `oklch(61% 0.085 78)` | Secondary gold |
| `--mk-gold-pale` | `oklch(86% 0.07 84)` | Hover lift |
| `--mk-patina` | `oklch(70% 0.12 188)` | Secondary accent |
| `--mk-patina-pale` | `oklch(82% 0.07 188)` | Hover lift on patina |
| `--mk-patina-deep` | `oklch(49% 0.08 188)` | Deep oxide |
| `--mk-rule` | `oklch(78% 0 0 / 0.16)` | Default border |
| `--mk-rule-strong` | `oklch(74% 0.09 82 / 0.6)` | Active gold border |
| `--mk-vermilion` | `oklch(58% 0.15 35)` | Warning / error |
| `--mk-scanline` | `oklch(84% 0.19 80.46 / 0.03)` | Scanline overlay |

### White Theme (`data-theme="white"`)

| Token | OKLCH | Role |
|-------|-------|------|
| `--mk-lacquer` | `oklch(97% 0.003 85)` | Page ground |
| `--mk-lacquer-deep` | `oklch(93% 0.004 85)` | Deepest inset |
| `--mk-raised` | `oklch(100% 0 0)` | Panels, cards |
| `--mk-graphite` | `oklch(88% 0.005 85)` | Inactive states |
| `--mk-graphite-2` | `oklch(84% 0.005 85)` | One step up |
| `--mk-champagne` | `oklch(15% 0.008 80)` | Headlines |
| `--mk-text` | `oklch(25% 0.01 80)` | Body |
| `--mk-muted` | `oklch(45% 0.01 80)` | Secondary text |
| `--mk-faint` | `oklch(60% 0.01 80)` | Subdued |
| `--mk-mute-deep` | `oklch(70% 0 0)` | Disabled |
| `--mk-gold` | `oklch(65% 0.14 78)` | Primary accent |
| `--mk-gold-rich` | `oklch(55% 0.12 78)` | Active CTA |
| `--mk-gold-deep` | `oklch(45% 0.10 78)` | Secondary gold |
| `--mk-gold-pale` | `oklch(75% 0.10 78)` | Hover lift |
| `--mk-patina` | `oklch(55% 0.12 188)` | Secondary accent |
| `--mk-patina-pale` | `oklch(68% 0.08 188)` | Hover lift |
| `--mk-patina-deep` | `oklch(35% 0.08 188)` | Deep oxide |
| `--mk-rule` | `oklch(50% 0 0 / 0.12)` | Default border |
| `--mk-rule-strong` | `oklch(55% 0.09 78 / 0.5)` | Active gold border |
| `--mk-vermilion` | `oklch(50% 0.15 35)` | Warning / error |
| `--mk-scanline` | `oklch(0% 0 0 / 0.015)` | Scanline overlay |

### Elysia Theme (`data-theme="elysia"`)

| Token | OKLCH | Role |
|-------|-------|------|
| `--mk-lacquer` | `oklch(15% 0.04 330)` | Page ground |
| `--mk-lacquer-deep` | `oklch(10% 0.03 330)` | Deepest inset |
| `--mk-raised` | `oklch(20% 0.04 330)` | Panels, cards |
| `--mk-graphite` | `oklch(25% 0.03 330)` | Inactive states |
| `--mk-graphite-2` | `oklch(30% 0.03 330)` | One step up |
| `--mk-champagne` | `oklch(92% 0.02 330)` | Headlines |
| `--mk-text` | `oklch(85% 0.025 330)` | Body |
| `--mk-muted` | `oklch(70% 0.03 330)` | Secondary text |
| `--mk-faint` | `oklch(60% 0.03 330)` | Subdued |
| `--mk-mute-deep` | `oklch(50% 0.02 330)` | Disabled |
| `--mk-gold` | `oklch(80% 0.10 10)` | Primary accent — warm pink |
| `--mk-gold-rich` | `oklch(72% 0.12 10)` | Active CTA |
| `--mk-gold-deep` | `oklch(55% 0.10 350)` | Secondary accent |
| `--mk-gold-pale` | `oklch(85% 0.08 10)` | Hover lift |
| `--mk-patina` | `oklch(75% 0.09 290)` | Secondary — amethyst |
| `--mk-patina-pale` | `oklch(82% 0.07 290)` | Hover lift |
| `--mk-patina-deep` | `oklch(50% 0.08 290)` | Deep crystal |
| `--mk-rule` | `oklch(80% 0.03 330 / 0.15)` | Default border |
| `--mk-rule-strong` | `oklch(80% 0.10 10 / 0.5)` | Active border |
| `--mk-vermilion` | `oklch(60% 0.14 20)` | Warning |
| `--mk-scanline` | `oklch(92% 0.04 330 / 0.025)` | Scanline overlay |

### Rei Theme (`data-theme="rei"`)

| Token | OKLCH | Role |
|-------|-------|------|
| `--mk-lacquer` | `oklch(12% 0.01 240)` | Page ground |
| `--mk-lacquer-deep` | `oklch(8% 0.008 240)` | Deepest inset |
| `--mk-raised` | `oklch(17% 0.01 240)` | Panels, cards |
| `--mk-graphite` | `oklch(22% 0.012 240)` | Inactive states |
| `--mk-graphite-2` | `oklch(27% 0.012 240)` | One step up |
| `--mk-champagne` | `oklch(90% 0.005 240)` | Headlines |
| `--mk-text` | `oklch(82% 0.008 240)` | Body |
| `--mk-muted` | `oklch(65% 0.01 240)` | Secondary text |
| `--mk-faint` | `oklch(55% 0.01 240)` | Subdued |
| `--mk-mute-deep` | `oklch(45% 0.01 240)` | Disabled |
| `--mk-gold` | `oklch(72% 0.10 30)` | Primary accent — warm amber |
| `--mk-gold-rich` | `oklch(65% 0.12 30)` | Active CTA |
| `--mk-gold-deep` | `oklch(50% 0.10 30)` | Secondary |
| `--mk-gold-pale` | `oklch(78% 0.08 30)` | Hover lift |
| `--mk-patina` | `oklch(65% 0.08 200)` | Secondary — steel blue |
| `--mk-patina-pale` | `oklch(75% 0.06 200)` | Hover lift |
| `--mk-patina-deep` | `oklch(40% 0.08 200)` | Deep steel |
| `--mk-rule` | `oklch(75% 0.005 240 / 0.12)` | Default border |
| `--mk-rule-strong` | `oklch(72% 0.10 30 / 0.5)` | Active border |
| `--mk-vermilion` | `oklch(55% 0.14 25)` | Warning |
| `--mk-scanline` | `oklch(90% 0.01 240 / 0.02)` | Scanline overlay |

### Tag Colors (shared across themes)

Tags retain independent colors for visual distinction. Defined as CSS variables per tag key:

| Tag | OKLCH | CSS Variable |
|-----|-------|-------------|
| CVE | `oklch(75% 0.15 25)` | `--tag-cve` |
| 安全工具 | `oklch(70% 0.12 230)` | `--tag-tool` |
| 学习笔记 | `oklch(75% 0.12 70)` | `--tag-note` |
| 逆向 | `oklch(70% 0.10 330)` | `--tag-reverse` |
| 调试 | `oklch(72% 0.10 160)` | `--tag-debug` |
| Web安全 | `oklch(70% 0.12 230)` | `--tag-web` |
| CTF | `oklch(75% 0.14 10)` | `--tag-ctf` |
| 漏洞分析 | `oklch(72% 0.12 40)` | `--tag-vuln` |
| 默认 | `oklch(65% 0.02 0)` | `--tag-default` |

---

## 2. Typography

### Font Stack

| Role | Stack |
|------|-------|
| Display (h1, h2) | `"JetBrains Mono", "SFMono-Regular", "Consolas", monospace` |
| Wordmark | `"JetBrains Mono", "SFMono-Regular", monospace` |
| Body / UI | `"Albert Sans", "Noto Sans SC", "Avenir Next", "Helvetica Neue", Arial, sans-serif` |
| Mono labels | `"JetBrains Mono", "SFMono-Regular", "Consolas", monospace` |

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Used For |
|-------|------|--------|-------------|----------------|----------|
| `--mk-type-wordmark` | `1.1rem` | 400 | 1 | `0.15em` | Brand lockup |
| `--mk-type-display` | `clamp(2.6rem, 5vw, 3.8rem)` | 300 | 1.05 | `-0.01em` | Hero h1 |
| `--mk-type-headline` | `clamp(1.6rem, 3vw, 2.2rem)` | 600 | 1.08 | `0` | Section h2 |
| `--mk-type-title` | `1.18rem` | 500 | 1.35 | `0` | Card/post titles, h3 |
| `--mk-type-body` | `1rem` | 400 | 1.8 | `0` | Body text |
| `--mk-type-small` | `0.88rem` | 400 | 1.6 | `0` | Secondary body |
| `--mk-type-eyebrow` | `0.7rem` | 500 | 1 | `0.18em` | Section labels |
| `--mk-type-mono` | `0.82rem` | 500 | 1.4 | `0` | Code, metadata |
| `--mk-type-tag` | `0.72rem` | 600 | 1 | `0.04em` | Tag labels |

### Typography Rules

**The Weight-Inversion Rule.** Section h2s read heavier (600) than the hero h1 (300). Hero is thin and elegant; section anchors carry more weight.

**The Two-Face Rule.** Display sizes (h1, h2) use JetBrains Mono. Anything below `1.2rem` uses Albert Sans + Noto Sans SC.

**Tracked Labels Are Short Rule.** Tracked uppercase labels are for short system markers only. No full sentences in tracked caps.

**Dark Type Needs Air Rule.** Body text on dark surfaces uses line-height 1.8 and max-width 65-75ch.

---

## 3. Spacing & Rounded

| Token | Value |
|-------|-------|
| `--mk-space-xs` | `4px` |
| `--mk-space-sm` | `8px` |
| `--mk-space-md` | `16px` |
| `--mk-space-lg` | `24px` |
| `--mk-space-xl` | `32px` |
| `--mk-space-2xl` | `48px` |
| `--mk-space-3xl` | `64px` |
| `--mk-radius-none` | `0` |
| `--mk-radius-xs` | `2px` |
| `--mk-radius-sm` | `4px` |
| `--mk-radius-md` | `6px` |
| `--mk-radius-lg` | `8px` |

---

## 4. Shadows & Elevation

The system is mostly flat. Depth comes from material contrast and hairline borders.

| Token | Value | Used For |
|-------|-------|----------|
| `--mk-shadow-panel` | `0 24px 70px oklch(2% 0.004 95 / 0.42)` | Large framed modules |
| `--mk-shadow-lift` | `0 18px 48px oklch(2% 0.004 95 / 0.4)` | CTA hover |
| `--mk-shadow-glow` | `0 0 22px var(--mk-patina / 0.24)` | Small indicators |
| `--mk-shadow-sticky` | `0 2px 20px oklch(0% 0 0 / 0.25)` | Sticky nav |

**Hairline First Rule.** Use 1px hairlines before adding shadow.

**No Glass Rule.** Translucency can exist in overlays, but decorative blur/glass panels are not part of this system.

**No Default Card Shadow.** Cards rest on borders and background shifts.

---

## 5. Components

### 5.1 Brand Lockup

```html
<div class="mk-brand">
  <span class="mk-mark"></span>
  <span class="mk-wordmark">// HIMOBRINE</span>
</div>
```

- `.mk-mark` — carved-tile glyph (gold square with diagonal slash), 32×32px
- `.mk-wordmark` — uppercase mono, weight 400, letter-spacing 0.15em

### 5.2 Sections

```html
<section class="mk-section">
  <header class="mk-section-head">
    <span class="mk-section-eyebrow">optional mono label</span>
    <h2>Section Title</h2>
    <p class="mk-section-sub">Optional subhead.</p>
  </header>
  <div class="mk-section-body">
    <!-- content -->
  </div>
</section>
```

- `.mk-section` — max-width 960px, centered, gutter padding
- `.mk-section-head h2` — auto-styled to headline scale
- Max-width on `.mk-section-sub`: 65ch

### 5.3 Bento Grid (Homepage Post Grid)

```html
<div class="mk-bento">
  <article class="mk-bento-tile mk-bento-tile--span-4">
    <time class="mk-post-date">2026 // 06 / 15</time>
    <h3 class="mk-post-title"><a href="...">Post Title</a></h3>
    <div class="mk-post-tags">
      <a href="..." class="mk-tag" style="--tag-color: var(--tag-cve)">CVE</a>
    </div>
    <p class="mk-post-excerpt">Excerpt text...</p>
    <a href="..." class="mk-read-more">[ + ] READ MORE &rarr;</a>
  </article>
  <!-- repeat -->
</div>
```

Breakpoints:
- `--span-4` on ≥960px viewport = 4/12 columns
- On <768px: single column full-width
- On <480px: compact padding

### 5.4 Tags

```html
<a href="..." class="mk-tag" style="--tag-color: var(--tag-cve)">#CVE</a>
```

- `border: 1px solid var(--tag-color / 0.3)`
- `color: var(--tag-color)`
- `border-radius: 2px`
- `padding: 2px 14px`
- Hover: background `var(--tag-color / 0.08)`, no translate

### 5.5 Buttons

```html
<button class="mk-btn mk-btn-primary">Button</button>
<a href="..." class="mk-btn mk-btn-secondary">Link</a>
```

- **Primary:** Gold fill, dark text, 1px gold border, 2px radius, min-height 48px
- **Secondary:** Transparent, gold border, gold text
- **Disabled:** Muted text, faint border, no pointer events
- Hover: slight upward translateY(-1px), no bounce

### 5.6 Navigation

```html
<nav class="mk-nav" id="mkNav">
  <a href="index.html" class="mk-nav-link active">首页</a>
  <a href="..." class="mk-nav-link">CVE</a>
  <a href="..." class="mk-nav-link">安全工具</a>
  <!-- ... -->
</nav>
```

- Sticky on scroll via IntersectionObserver
- Background: `var(--mk-raised)` with subtle `var(--mk-rule)` bottom border
- Active link: gold text + thin gold bottom border or hairline underline
- No backdrop-filter blur

### 5.7 Post Content

```html
<article class="mk-post-content">
  <!-- h4 = major section, h5 = subsection -->
  <h4 id="section">Section Title</h4>
  <p>Body text...</p>
  <pre><code>code block</code></pre>
</article>
```

- `h4`: color `var(--mk-gold)`, weight 600, border-left 2px `var(--mk-rule-strong)`
- `h5`: color `var(--mk-champagne)`, weight 600, no border
- `p`: color `var(--mk-text)`, line-height 1.8, max-width 75ch
- `code` inline: background `var(--mk-graphite)`, color `var(--mk-patina)`, 2px radius
- `pre`: background `var(--mk-lacquer-deep)`, border `var(--mk-rule)`, 2px radius
- `blockquote`: border-left 2px `var(--mk-patina)`, background `var(--mk-raised)`
- `img`: max-width 100%, 2px radius
- `table`: full-width, border `var(--mk-rule)`, th background `var(--mk-raised)`

### 5.8 TOC Sidebar

```html
<nav class="mk-toc">
  <span class="mk-toc-title">// TOC</span>
  <ul>
    <li class="toc-h4"><a href="#section">Section Title</a></li>
    <li class="toc-h5"><a href="#sub">Sub Section</a></li>
  </ul>
</nav>
```

- Fixed position, left side, `top: 50%, translateY(-50%)`
- Background: `var(--mk-raised)`, border-left 2px `var(--mk-rule-strong)`
- Width: 200px, hidden on <1200px
- Active link: gold text + gold left border

### 5.9 Footer

```html
<footer class="mk-footer">
  <div class="mk-footer-brand">RHODES ISLAND :// SECURITY LAB // BLOG</div>
  <div class="mk-footer-motto">> 道可道，非常道，名可名，非常名</div>
  <div class="mk-footer-links">
    <a href="...">GitHub</a>
    <a href="...">友情链接</a>
  </div>
  <div class="mk-footer-copy">(c) 2026 // SECURITY BLOG</div>
</footer>
```

- Top border: `var(--mk-rule)` hairline
- Bottom: optional patina accent edge (2px `var(--mk-patina)`)
- Centered text, relaxed spacing

### 5.10 Theme Dock

```html
<div class="mk-themedock" id="mkThemeDock">
  <span class="mk-themedock-item active" data-theme="black">■</span>
  <span class="mk-themedock-item" data-theme="white">□</span>
  <span class="mk-themedock-item" data-theme="elysia">◇</span>
  <span class="mk-themedock-item" data-theme="rei">▽</span>
</div>
```

- Fixed bottom-right, above float buttons
- Background: `var(--mk-raised)`, border `var(--mk-rule)`
- Active item: gold border or gold text
- No backdrop-filter blur

### 5.11 Graph Sidebar

```html
<aside class="mk-graph-sidebar" id="mkGraphSidebar">
  <div class="mk-graph-title"><a href="graph.html">// 关系图谱</a></div>
  <div id="graphContainer"></div>
</aside>
```

- Fixed right, `top: 50%, translateY(-50%)`
- Width: 240px, aspect-ratio 1
- Border: `var(--mk-rule-strong)` — gold hairline
- Hidden on <1400px

### 5.12 Floating Buttons

```html
<div class="mk-float-buttons">
  <button class="mk-float-btn" id="themeToggle" aria-label="主题">◆</button>
  <button class="mk-float-btn" id="backToTop" aria-label="回到顶部">⌃</button>
</div>
```

- Fixed bottom-right, 40×40px
- Border `var(--mk-rule)`, background `var(--mk-raised)`
- Hover: gold border
- `#backToTop`: hidden until scrolled

### 5.13 Code Block Header

```html
<div class="mk-code-wrap">
  <div class="mk-code-header">
    <span class="mk-code-info">filename / lang</span>
    <div class="mk-code-actions">
      <button class="mk-code-btn" data-copy>⎘</button>
      <button class="mk-code-btn" data-fold>▽</button>
    </div>
  </div>
  <pre><code>code</code></pre>
</div>
```

- Header background: `var(--mk-graphite)`
- Border: `var(--mk-rule)`
- Copy button feedback: patina "copied" state

### 5.14 Pagination

```html
<div class="mk-pagination">
  <a href="?page=1" class="mk-page-link mk-page-current">1</a>
  <a href="?page=2" class="mk-page-link">2</a>
  <span class="mk-page-ellipsis">…</span>
  <a href="?page=5" class="mk-page-link">5</a>
</div>
```

- Current page: gold border, gold text
- Hover: gold text
- Disabled: faint text, no pointer

---

## 6. Scanline Effect

A refined scanline overlay replaces the original CRT effect. Subtler, thinner, gold-tinted in dark themes.

```css
.mk-scanline {
  position: fixed; inset: 0; pointer-events: none; z-index: 9999;
  background: repeating-linear-gradient(
    0deg, transparent, transparent 2px,
    var(--mk-scanline) 2px, var(--mk-scanline) 4px
  );
}
```

No scanning animation line — the static overlay is sufficient.

---

## 7. Design Rules

### The Gold Carries Brand Rule
Gold is the primary accent. If a single color represents the brand, use gold — not cyan, not magenta, not purple.

### The Patina Has Meaning Rule
Patina/secondary marks improvement, state, or contrast. Not generic decoration.

### The Hairline First Rule
Use 1px hairlines before adding shadow. Most elements need only a hairline border.

### The No Glass Rule
No decorative blur/glass. Backdrop-filter is not used in this system.

### The Two-Face Rule
Display sizes use JetBrains Mono. Body sizes use Albert Sans / Noto Sans SC.

### The Weight-Inversion Rule
h1 = 300 (light), h2 = 600 (semibold). Do not normalize.

### The OKLCH-Only Rule
New colors are declared in OKLCH. Hex appears only inside third-party content or imported assets.

### The No Gradient Text Rule
Headlines are solid colors. No `background-clip: text` gradient fills.

### The Texture Budget Rule
Texture (scanline, patina edges) is for brand-bearing moments. Cards stay clean.

---

## 8. Do and Do Not

### Do
- Do use gold as the primary accent color.
- Do use patina for secondary state, tags, and indicators.
- Do keep surfaces dark (or white in light theme) and mineral.
- Do use hairline borders before shadows.
- Do keep cards flat, compact, sharply bounded.
- Do preserve utility: post lists, tags, graph, search, code blocks remain readable.
- Do apply OKLCH for all new color values.
- Do use mono for display hierarchy.

### Do Not
- Do not use gradient text on headings.
- Do not use backdrop-filter blur or glassmorphism.
- Do not use cyan/neon blue as the primary brand accent.
- Do not use pure black (`#000`) or pure white (`#fff`).
- Do not use wide rounding (>8px).
- Do not add decorative shadows to cards.
- Do not use italic serif display typography.
- Do not use purple gradients or neon glow.
- Do not put scanline animation on elements that carry text.

---

## 9. File Structure

```
mywiki/
├── design.md                        ← this file
├── index.html                       ← homepage (mk-bento grid)
├── links.html                       ← friends links
├── graph.html                       ← knowledge graph (full-page)
├── assets/
│   ├── style.css                    ← global styles, 4 themes, all mk-* components
│   ├── common.js                    ← theme switching, scroll, animation, lightbox
│   ├── posts-data.js                ← POSTS_DATA + TAG_COLORS (unchanged)
│   ├── graph.js                     ← vis-network render (recolored)
│   └── vis-network.min.js           ← unchanged
├── posts/                           ← individual article HTML files
├── tags/
│   └── list.html                    ← tag archive page
└── source/
    └── images/
```

---

*Design system generated from Impeccable's Neo Kinpaku philosophy, adapted for MyWiki's security research context. Four themes: Black (lacquer), White (warm), Elysia (pink crystal), Rei (blue steel).*
