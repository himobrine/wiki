# 信息安全实验室 — 静态博客

纯前端静态安全技术博客，零构建工具依赖，浏览器直接打开即可。文章为独立 HTML 文件存放在 `posts/`，首页与标签页由 `assets/posts-data.js` 中的数据驱动渲染。

---

## 功能特性

- **4 套主题** — `black`（默认）/ `white` / `elysia` / `rei`，一键切换并记忆到 `localStorage`
- **知识图谱** — 基于 `vis-network`，标签共享边（虚线）+ 引用边（实线金色）；文章页侧边栏懒加载，首页/标签页为枢纽视图，`graph.html` 为全站视图
- **全站搜索** — 标题 / 摘要 / 标签即时搜索，支持中英文，由 `common.js` 按需懒加载
- **AI 助手** — 文章页右下角入口，按需懒加载 `ai-assistant.js`
- **标签系统** — 结构化标签对象（`category` / `knowledge` / `tools`），文章标签栏自动渲染为彩色 chip
- **代码块增强** — 超过 10 行自动折叠，带 `copy` / `fold` 按钮
- **自动部署** — GitHub Actions 推送到 `main` 自动部署到 GitHub Pages

---

## 目录结构

```
mywiki/
├── index.html              # 首页：最新 12 篇 + 标签索引
├── links.html              # 友情链接
├── graph.html              # 全站知识图谱
├── assets/
│   ├── style.css           # 设计系统（Lacquer Lab，OKLCH 变量，4 主题）
│   ├── posts-data.js       # 唯一数据源：POSTS_DATA / POSTS_BY_ID / BACKLINKS /
│   │                       #   TAG_COLORS / getFlatTags() / currentPost()
│   ├── common.js           # 公共运行时：主题切换、回到顶部、TOC 高亮、代码块增强、
│   │                       #   搜索 / AI / 图谱懒加载、图片灯箱、WebP 自适应
│   ├── post-tags.js        # 文章标签栏渲染
│   ├── backlinks.js        # 引用 / 反向链接区块渲染
│   ├── search.js           # 全站搜索（由 common.js 懒加载）
│   ├── ai-assistant.js     # AI 助手（由 common.js 懒加载）
│   ├── graph.js            # 知识图谱渲染（由 common.js 懒加载）
│   └── vis-network.min.js  # 图谱库（第三方，勿改）
├── posts/                  # 121 篇文章，每篇一个 HTML
├── tags/list.html          # 标签归档页（按标签筛选）
├── design.md               # 设计系统规范（Lacquer Lab，主题令牌与组件规范）
├── .github/workflows/static.yml
└── readme.md
```

---

## 架构约定（重要）

**页面里不写业务脚本。** 所有行为都在 `assets/` 的共享脚本里，HTML 只保留结构和 4 个 `<script src>` 引用。

- ✅ 行为变更 → 只改 `assets/` 下的脚本，121 篇文章同时生效
- ❌ 不要把 JS 内联到文章 HTML 中（历史上曾这样做，导致 121 份重复代码、行为漂移）
- ❌ 不要在任何脚本里动态加载 `posts-data.js`（数据必须静态引入，见下）
- 不要手写 `POSTS` 映射数组去裁剪 `POSTS_DATA` —— 裁剪会丢掉 `id` / `references`，
  曾导致文章图谱的引用边整条链路静默失效。图谱直接读 `POSTS_DATA`。

### 脚本加载顺序

文章页底部固定为这 4 行，顺序不可调换：

```html
<script src="../assets/posts-data.js"></script>
<script src="../assets/post-tags.js"></script>
<script src="../assets/common.js"></script>
<script src="../assets/backlinks.js"></script>
```

`posts-data.js` 必须最先引入（其余脚本都依赖它定义的全局变量）。`common.js` 内部使用
`document.currentScript.src` 推导资源基路径，因此放在 `posts/` 或子目录均可，无需区分。

懒加载链（由 `common.js` 负责，勿在 HTML 中重复实现）：

| 触发条件 | 加载 |
|----------|------|
| 搜索框获得焦点 | `search.js` |
| 出现 AI 助手挂载点 | `ai-assistant.js` |
| `#mkGraphSidebar` 所在页在 DOM 就绪后 | `vis-network.min.js` → `graph.js` |

---

## 添加新文章

### 步骤 1：创建 HTML

复制任意现有文章（如 `posts/cpp-constants.html`）后替换内容，或使用下方模板。
**必须保留**的骨架节点：

| 节点 | 作用 |
|------|------|
| `<div class="mk-post-content">` | 正文容器 — 代码块增强与 TOC 都以它为根 |
| `<div class="mk-post-tags"></div>` | `post-tags.js` 的挂载点 |
| `<nav class="mk-toc">` | 目录；`a[href]` 必须与正文标题 `id` 一一对应 |
| `<div id="postReferences">` / `<div id="postBacklinks">` | 引用 / 反链区块挂载点 |
| `<div class="mk-graph-sidebar" id="mkGraphSidebar">` | 图谱侧栏（内含 `#graphContainer`） |

### 步骤 2：文章模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>文章标题 - 信息安全实验室</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="../assets/style.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="../assets/style.css"></noscript>
</head>
<body>
<div class="mk-scanline"></div>
<div class="mk-container">

<div id="mkNavSentinel"></div>
<div class="mk-nav-wrap" id="mkNavWrap">
  <nav class="mk-nav">
    <a href="../index.html" class="mk-nav-link">首页</a>
    <a href="../tags/list.html" class="mk-nav-link">标签归档</a>
  </nav>
</div>

<a href="../index.html" class="mk-back-link">[ &larr; ] BACK TO HOME</a>

<article class="mk-bento-tile">
  <div class="mk-post-date">2026 // 06 / 05</div>
  <div class="mk-post-title">文章标题</div>
  <div class="mk-post-tags"></div>

  <div class="mk-post-content">

<nav class="mk-toc">
  <span class="mk-toc-title">// 目录</span>
  <ul>
    <li class="toc-h4"><a href="#overview">概述</a>
      <ul><li class="toc-h5"><a href="#usage">用法</a></li></ul>
    </li>
  </ul>
</nav>

<h4 id="overview">概述</h4>
<p>正文段落。</p>

<h5 id="usage">用法</h5>
<pre><code>代码块：超过 10 行会自动折叠</code></pre>

  </div>
</article>

<footer class="mk-footer">
  <div class="mk-footer-brand">RHODES ISLAND <span>://</span> SECURITY LAB</div>
  <div class="mk-footer-links">
    <a href="https://github.com/himobrine/wiki">GitHub</a>
    <a href="../links.html">友情链接</a>
    <a href="../index.html">Home</a>
  </div>
</footer>

<div id="postReferences"></div>
<div id="postBacklinks"></div>

<div class="mk-graph-sidebar" id="mkGraphSidebar">
  <div class="mk-graph-title"><a href="../graph.html">// 关系图谱</a></div>
  <div id="graphContainer"></div>
</div>

<div class="mk-themedock" id="mkThemeDock">
  <span class="mk-themedock-item active" data-theme="black">■</span>
  <span class="mk-themedock-item" data-theme="white">□</span>
  <span class="mk-themedock-item" data-theme="elysia">◇</span>
  <span class="mk-themedock-item" data-theme="rei">▽</span>
</div>

<div class="mk-float-buttons">
  <button class="mk-float-btn" id="mkThemeToggle" title="切换主题" aria-label="切换主题">■</button>
  <button class="mk-float-btn" id="mkBackToTop" title="回到顶部" aria-label="回到顶部">⌃</button>
</div>

<script src="../assets/posts-data.js"></script>
<script src="../assets/post-tags.js"></script>
<script src="../assets/common.js"></script>
<script src="../assets/backlinks.js"></script>
</body>
</html>
```

新增文章时把 `index.html` 的 `.mk-nav` 导航项一并同步（导航栏目前是各页独立维护的静态标记）。

### 步骤 3：登记数据

在 `assets/posts-data.js` 的 `POSTS_DATA` 数组中追加：

```js
{
  title: '文章标题',
  id: 'your-article',            // 唯一标识，建议与文件名一致（不含 .html）
  references: [],                // 引用的其他文章 id；留空则无引用边
  primary: 'Web安全',            // Web安全 / CTF / 逆向 / C/C++ / AI安全
  secondary: 'DVWA',             // 决定图谱节点形状
  date: '2026 // 06 / 05',       // 排序依据
  url: 'posts/your-article.html', // 相对站点根
  excerpt: '1-2 句摘要',
  tags: {
    category: ['文件上传'],
    knowledge: ['文件上传漏洞'],
    tools: ['Burp Suite']
  }
}
```

`POSTS_BY_ID`、`BACKLINKS` 由 `posts-data.js` 依据 `id` 与 `references` 自动派生，**不要手工维护**。
`id` 缺失或悬空会在浏览器控制台输出 `[backlinks] dangling reference` 警告。

### 步骤 4：新标签配色

在 `assets/posts-data.js` 的 `TAG_COLORS` 中加一行即可（不含 `#`）：

```js
'新标签': '00d4ff'
```

文章标签 chip 的颜色由 `post-tags.js` 从 `TAG_COLORS` 读取，缺失时回落到分组默认色
（`category` 灰 / `knowledge` 紫 / `tools` 青），无需再改 CSS。

---

## 代码块

`<div class="mk-post-content">` 内的**所有裸 `<pre>`** 都会被 `common.js` 自动处理：

- 包裹进 `.mk-code-wrap`，注入 `.mk-code-header`（`CODE // N lines` + 操作按钮）
- 提供 `copy`（剪贴板）与 `fold`（展开/折叠）按钮
- 行数 > 10 时自动添加 `.collapsed`，CSS 以 `max-height` + `mask-image` 渐变遮罩呈现

因此正文里**只需写裸 `<pre><code>`**，不要手写 `.mk-code-wrap` 结构。
历史文章中已有的手写 wrap 也能正常工作：`common.js` 检测到已有 wrap 时会保留其
`.mk-code-info` 标签（如 `bash`），仅补齐操作按钮，不会重复包裹。

```html
<!-- 推荐 -->
<pre><code>apt update</code></pre>
```

---

## 知识图谱

`graph.js` 依据 `POSTS_DATA` 构建，三种视图由页面上下文决定：

| 页面 | 视图 |
|------|------|
| 文章页 | 以当前文章为中心的放射图（含引用边 / 被引用边） |
| `index.html`、`tags/list.html` | 枢纽视图（侧栏带 `data-default-spoke` 属性，带切换按钮） |
| `graph.html` | 全站图 + 枢纽切换按钮 |

连边规则：共享标签权重 `category:1 / knowledge:3 / tools:2`；含非枢纽知识点（权重 ≥ 3）
或共享 ≥ 2 个不同标签时连边；`references` 额外生成金色实线引用边，目标文章即使没有标签
关联也会被纳入节点集，因此不会出现悬空边。

**布局策略**：侧栏与全站页同样使用 `forceAtlas2Based` 力导向模拟 —— 侧栏用
`gravitationalConstant: -50`、预稳定 80 次，`graph.html` 用 `-85`、200 次。取景交给
vis 的 `stabilization.fit`，代码不手动调 `fit()`，否则视口会锁死在模拟前的位置上。
`placeNodes()` 只提供**初始布局**（枢纽标签排内圈，文章按主分类切扇区分环），让模拟从
确定性的相局位置展开，而不是从随机位置炸开。交互两处一致：悬停或拖拽节点冻结模拟，
鼠标移出恢复。侧栏宽度随视口分三档：>1400px 为 240px，1300–1400px 为 160px，≤1299px 隐藏。

> **当前数据状态**：121 篇文章的 `references` 均为空数组，所以图谱上暂时看不到引用边，
> 文章底部也不会出现「引用 / 反向链接」区块。代码链路已就绪 —— 填写 `references` 后即自动生效。

---

## 主题系统

`assets/style.css` 使用 OKLCH 令牌定义 4 套主题，通过 `<html data-theme="...">` 切换：

| 主题 | `data-theme` | 风格 |
|------|--------------|------|
| 玄黑（默认） | `black` | 漆器近黑底，金 / 青双色强调 |
| 素白 | `white` | 暖白底，低饱和强调 |
| 艾露西亚 | `elysia` | 粉晶，柔和强调 |
| rei | `rei` | 蓝钢蓝灰底，朱红强调 |

主要变量：`--mk-lacquer`（页面底色）、`--mk-raised` / `--mk-graphite`（卡片层级）、
`--mk-text` / `--mk-muted` / `--mk-faint`（文字层级）、`--mk-gold` / `--mk-patina`
（主强调色）、`--mk-rule`（描边）。组件统一使用 `mk-` 前缀（`.mk-tile`、`.mk-tag`、
`.mk-code-wrap`、`.mk-graph-sidebar` 等）。

---

## 自动部署

`.github/workflows/static.yml`：推送到 `main` 或手动 `workflow_dispatch` 触发，
checkout → 配置 Pages → 缓存 → 上传产物 → `actions/deploy-pages` 部署。
纯静态，无需构建步骤。

---

## 维护清单

- [ ] 文章骨架节点齐全（`mk-post-content` / `mk-post-tags` / `mk-toc` / `postReferences` / `postBacklinks` / `mkGraphSidebar`）
- [ ] 页面底部 4 个 `<script src>` 顺序正确，且**没有**任何内联业务脚本
- [ ] `POSTS_DATA` 已登记新条目，`id` 与文件名一致
- [ ] 新标签已加入 `TAG_COLORS`
- [ ] TOC 的 `a[href]` 与正文标题 `id` 一一对应
- [ ] 导航栏与 `index.html` 同步
- [ ] 图片放入 `assets/`，并同时提供 `.png` 与 `.webp`（`common.js` 自动按浏览器能力切换）
- [ ] 浏览器实测：主题切换、代码块 copy/fold、回到顶部、搜索、图谱侧栏

---

> 项目维护者：himobrine · [GitHub](https://github.com/himobrine/wiki)
文档采用 CC BY-NC-ND 4.0，代码部分保留所有权利。
