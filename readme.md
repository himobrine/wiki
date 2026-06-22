# 信息安全实验室 — 静态博客

纯前端静态安全技术博客，零构建工具依赖，浏览器直开。文章以独立 HTML 文件存放在 `posts/`，首页与标签页通过内置 JavaScript 数据数组驱动渲染。

---

## 目录结构

```
mywiki/
├── index.html              # 首页 — 最新文章列表 + 标签索引
├── links.html              # 友情链接页
├── graph.html              # 知识图谱可视化
├── assets/
│   ├── style.css           # 全局样式（5 套主题）
│   ├── posts-data.js       # 文章数据（POSTS_DATA）+ 标签颜色（TAG_COLORS）
│   ├── graph.js            # 知识图谱逻辑
│   ├── vis-network.min.js  # 图谱可视化库
│   └── *.gif / *.png       # 文章配图
├── posts/                  # 所有文章 HTML（每篇一个文件）
├── tags/
│   └── list.html           # 标签归档页（按标签筛选 + 分页）
├── source/
│   └── images/             # 源图片（设计稿/素材）
└── .gitignore
```

---

## 添加新文章流程

### 步骤 1：创建文章 HTML

在 `posts/` 下新建 `.html` 文件，遵循下方的**文章模板规范**。

关键要点：
- `<head>` 中使用 `preconnect` / `preload` / `media="print" onload="this.media='all'"` 优化字体和 CSS 加载（参考模板）
- **不要**在 `<head>` 中引用 `vis-network.min.js`（图谱是懒加载的）
- 文章底部必须引用 `<script src="../assets/common.js"></script>` — 它提供主题切换、回到顶部、滚动动画、WebP 自动检测切换
- 每篇文章底部必须包含图谱侧边栏和懒加载脚本（直接从已有文章复制）

### 步骤 2：准备文章图片

1. 截图放入 `assets/`，使用文章缩写前缀 + 序号命名（见下方**图片命名规范**）
2. **必须同时提供 `.png` 和 `.webp` 两种格式** — `common.js` 会自动检测浏览器支持并切换
   - WebP 转换工具：浏览器另存、ffmpeg、cwebp 等
   - 如 `rd_image001.png` + `rd_image001.webp`

### 步骤 3：更新数据文件

打开 `assets/posts-data.js`，在 `POSTS_DATA` 数组末尾添加新条目：

```js
{
  title: '文章标题',
  primary: '主分类',       // Web安全 / CTF / 逆向 / C/C++
  secondary: '子分类',     // 如 DVWA / Pwn / Crack 等
  date: '2026 // 06 / 05',
  url: 'posts/your-article.html',
  excerpt: '文章摘要，1-2 句话概述内容',
  tags: ['标签1', '标签2']
}
```

| 字段 | 说明 |
|------|------|
| `title` | 文章标题 |
| `primary` | 主分类（用于知识图谱群组聚类，影响节点颜色） |
| `secondary` | 子分类（用于知识图谱节点形状） |
| `date` | 日期格式 `YYYY // MM / DD`，用于排序 |
| `url` | 相对于站点根目录的路径 |
| `excerpt` | 首页展示的摘要文字 |
| `tags` | 标签数组，用于筛选和颜色标注 |

> `index.html` 和 `tags/list.html` 会自动从 `POSTS_DATA` 加载数据，无需手动编辑。
> **知识图谱**也会自动从 `POSTS_DATA` 渲染节点和关系边，确保 `primary` / `secondary` / `tags` 填写正确。

### 步骤 4：添加新标签颜色和 CSS 类

如果使用了全新标签，需要做两件事：

**4a. 在 `assets/posts-data.js` 的 `TAG_COLORS` 对象中增加颜色映射：**

```js
'新标签': '颜色十六进制（不含 #）'
```

颜色值参考：`00d4ff` / `3366ff` / `ff6b35` / `7b2d8e` / `2ea44f` / `e4405f` / `8b5cf6` / `f59e0b` / `10b981`

**4b. 在 `assets/style.css` 中为标签添加对应的 `tag-xxx` CSS class（用于文章 hero 区的标签导航栏）：**

```css
.tag-xxx { color: #xxxxxx; border-color: #xxxxxx44; }
```

然后在文章的 `.tags-bar` 中使用 `<a class="tag tag-xxx">#标签名</a>`。

### 步骤 5：检查导航栏同步

文章内的 `.nav-inner` 导航栏包含指向特定标签的快捷链接，必须与首页 `index.html` 的导航栏保持一致：

```html
<div class="nav-inner">
  <a href="../index.html">首页</a>
  <a href="../tags/list.html?tag=漏洞分析">漏洞分析</a>
  <a href="../tags/list.html?tag=安全工具">安全工具</a>
  <a href="../tags/list.html?tag=学习笔记">学习笔记</a>
  <a href="../tags/list.html?tag=逆向">逆向</a>
  <a href="../tags/list.html?tag=调试">调试</a>
  <a href="../tags/list.html">标签归档</a>
</div>
```

如需增删导航项，必须同步更新 **所有文章** + `index.html` + `tags/list.html`。

### 步骤 6：本地验证

用浏览器打开页面，检查：
- 文章内容正常显示，图片无 404
- 主题切换正常（`common.js` 已生效）
- 代码块 copy / fold 按钮正常
- 回到顶部按钮正常
- 图谱侧边栏懒加载正常
- 首页新文章条目出现在最新列表

---

## 文章模板规范

### HTML 骨架

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>文章标题 - 信息安全实验室</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Titillium+Web:wght@400;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Titillium+Web:wght@400;600;700&display=swap"></noscript>
<link rel="stylesheet" href="../assets/style.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="../assets/style.css"></noscript>
</head>
<body>
<div class="scanline"></div>
<div class="container">

<div class="hero">
  <h1>// BLOG : 信息安全实验室</h1>
  <div class="subtitle">RHODES ISLAND <span>://</span> SECURITY <span>//</span> RESEARCH <span>//</span> EXPLOIT <span>//</span> DEFENSE</div>
  <div class="tags-bar">
    <a href="../index.html" class="tag tag-cyan">#首页</a>
    <!-- 标签颜色 class 映射见下方「标签色值映射」表 -->
    <a href="../tags/list.html?tag=标签名" class="tag tag-xxx">#标签名</a>
  </div>
  <div class="tagline">&gt; LOADING - 100% <span class="cursor">▌</span></div>
</div>

<div id="navSentinel"></div>

<div class="nav-sticky-wrapper" id="navWrap">
  <div class="nav-inner">
    <a href="../index.html">首页</a>
    <!-- 导航栏必须与 index.html 同步 -->
    <a href="../tags/list.html?tag=漏洞分析">漏洞分析</a>
    <a href="../tags/list.html?tag=安全工具">安全工具</a>
    <a href="../tags/list.html?tag=学习笔记">学习笔记</a>
    <a href="../tags/list.html?tag=逆向">逆向</a>
    <a href="../tags/list.html?tag=调试">调试</a>
    <a href="../tags/list.html">标签归档</a>
  </div>
</div>

<a href="../index.html" class="back-link">[ &larr; ] BACK TO HOME</a>

<div class="post">
  <div class="post-date">YYYY // MM / DD</div>
  <div class="post-title">文章标题</div>
  <div class="post-tags">
    <a href="../tags/list.html?tag=标签名" class="post-tag" style="background:#xxxxxx22;color:#xxxxxx;border:1px solid #xxxxxx44">标签名</a>
  </div>

  <div class="post-content" style="display:block;border:none;padding:0;margin:0;">
    <nav class="post-toc">
      <span class="post-toc-title">// 目录</span>
      <ul>
        <li class="toc-h4"><a href="#section-id">一级标题</a></li>
        <li class="toc-h5"><a href="#sub-id">二级标题</a></li>
      </ul>
    </nav>

    <!-- 正文内容 -->
    <h4 id="section-id">一级标题</h4>
    <p>段落文字</p>
    <h5 id="sub-id">二级标题</h5>
    <p>段落文字</p>
    <pre><code>代码块</code></pre>

  </div>
</div>

<div class="footer">
  <div class="brand"><span class="rei-symbol">◈</span> RHODES ISLAND <span>://</span> SECURITY LAB <span>//</span> BLOG <span class="rei-symbol">◈</span></div>
  <div class="motto">&gt; 道可道，非常道，名可名，非常名</div>
  <div class="links">
    <a href="https://github.com/himobrine/wiki">GitHub</a>
    <a href="../links.html">友情链接</a>
    <a href="../index.html">Home</a>
  </div>
  <div class="copy">(c) 2026 // SECURITY BLOG</div>
</div>

</div>

<div class="theme-dock" id="themeDock">
  <div class="theme-dock-item active" data-theme="dark">☽</div>
  <div class="theme-dock-item" data-theme="light">☀</div>
  <div class="theme-dock-item" data-theme="crystal">◇</div>
  <div class="theme-dock-item" data-theme="ego">♢</div>
  <div class="theme-dock-item" data-theme="rei">レ</div>
</div>

<div class="floating-buttons">
  <button class="float-btn" id="themeToggle" title="切换主题" aria-label="切换主题">☽</button>
  <button class="float-btn" id="backToTop" title="回到顶部" aria-label="回到顶部">⌃</button>
</div>

<!--
  TOC 高亮 + 代码块头栏（copy/fold）+ 图谱侧边栏懒加载
  直接从已有文章（如 posts/cpp-constants.html）复制完整 script 块
-->
<script>
// 从已有文章复制：TOC IntersectionObserver + 代码块头栏自动生成 + 图谱懒加载
</script>

<!-- 图谱侧边栏 + 懒加载 -->
<div class="graph-sidebar" id="graphSidebar">
  <div class="graph-title"><a href="../graph.html">// 关系图谱</a></div>
  <div id="graphContainer"></div>
</div>
<script>
// 从已有文章复制图谱懒加载脚本
</script>

<!-- common.js：主题切换、回到顶部、滚动动画、WebP 自适应（必须放在最后） -->
<script src="../assets/common.js"></script>
</body>
</html>
```

### 标题层级约定

| 层级 | 标签 | 用途 | 示例 |
|------|------|------|------|
| 一级 | `<h4>` | 主要章节标题 | `<h4 id="overview">概述</h4>` |
| 二级 | `<h5>` | 子节标题 | `<h5 id="xdbg-control">调试控制</h5>` |

- 每个标题必须带唯一 `id` 锚点（英文连字符），用于 TOC 跳转
- TOC 侧边栏在 `<nav class="post-toc">` 中手动维护，两级 `<ul>` 嵌套

### 代码块格式

```html
<div class="code-wrapper">
  <div class="code-header">
    <span class="code-header-info">文件名 / 语言</span>
    <div class="code-header-actions">
      <button class="code-btn" onclick="...copy...">📋</button>
      <button class="code-btn" onclick="...fold...">🔽</button>
    </div>
  </div>
  <pre><code>代码内容</code></pre>
</div>
```

#### 代码块自动折叠

当代码块行数超过 **10 行**时，页面加载后会自动将其折叠，仅显示约 2 行高度并带有底部渐变遮罩效果：

```
┌──────────────────────────────────────┐
│ CODE // 42 lines          [copy] [↓] │
├──────────────────────────────────────┤
│ #include <stdio.h>                   │
│ int main() {                         │
│ ...                                  │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  <- 渐变遮罩
└──────────────────────────────────────┘
```

**交互方式：**
- 点击代码块右上角的 `↓` 按钮可展开/恢复折叠（按钮变为 `↑`）
- 直接点击折叠态的代码块区域也会展开

**实现原理：**
- 脚本遍历每篇文章的 `<pre>` 元素，统计行数（`split('\n').length`）
- 行数 > 10 时，为外层 `.mk-code-wrap` 添加 `collapsed` class
- CSS 中 `.mk-code-wrap.collapsed pre` 设置 `max-height: 2.8em; overflow: hidden` 并叠加 `mask-image` 渐变
- 该逻辑以内联 `<script>` 形式存在于每篇文章 HTML 底部（而非 `common.js`），新增文章需包含此脚本

### 图片

```html
<img src="../assets/xxx_image001.png" alt="描述文字">
```

---

## 标签色值映射

| 标签 | 颜色 | CSS class |
|------|------|-----------|
| `#逆向` | `#7b2d8e` | `tag-purple` |
| `#调试` | `#2ea44f` | `tag-green` |
| `#X64dbg` | `#00d4ff` | `tag-cyan` |
| `#Windbg` | `#3366ff` | `tag-blue` |
| `#学习笔记` | `#ff6b35` | `tag-orange` |
| `#C/C++` | `#3366ff` | `tag-blue` |
| `#底层原理` | `#ff6b35` | `tag-orange` |
| `#Web安全` | `#3366ff` | `tag-blue` |
| `#DVWA` | `#00d4ff` | `tag-cyan` |
| `#CTF` | `#e4405f` | — |
| `#Crypto` | `#00d4ff` | `tag-cyan` |
| `#RSA` | `#8b5cf6` | — |
| `#Pwn` | `#10b981` | — |
| `#蓝桥杯` | `#ec4899` | — |
| `#SQL注入` | `#8b5cf6` | — |
| `#XSS` | `#e4405f` | — |
| `#CSRF` | `#e4405f` | — |
| `#文件上传` | `#ff6b35` | `tag-orange` |
| `#文件包含` | `#ff6b35` | `tag-orange` |
| `#暴力破解` | `#ff6b35` | `tag-orange` |
| `#命令注入` | `#2ea44f` | `tag-green` |
| `#靶场搭建` | `#ff6b35` | `tag-orange` |
| `自定义标签` | `#8888a0` | `tag-add`（虚线边框） |

---

## 图片命名规范

| 前缀 | 用途 |
|------|------|
| `rd_` | 逆向调试文章 |
| `so_` / `so2_` | 栈溢出文章 |
| `ws_` | Web 安全文章 |
| `bf_` | 二进制相关 |
| `ce_` | CrackMe 文章 |
| `w6_` / `w10_` / `w11_` | Windows 相关 |
| 通用 | `xxx_image001.png` |

新文章建议使用文章缩写前缀 + 序号，如 `dvwa-csrf_image001.png`。

---

## CSS 变量主题系统

样式文件 `assets/style.css` 定义 5 套主题：

| 主题 | `data-theme` 值 | 风格 |
|------|----------------|------|
| 暗色 | `dark`（默认） | 黑色背景，青色强调 |
| 亮色 | `light` | 白色背景，深蓝强调 |
| 水晶 | `crystal` | 米白背景，淡紫/粉强调 |
| Ego | `ego` | 粉色背景，湖蓝强调 |
| Rei | `rei` | 蓝灰背景，红色强调（绫波丽主题） |

核心 CSS 变量（位于 `:root` 和 `[data-theme="xxx"]`）：

| 变量 | 作用 |
|------|------|
| `--bg-primary` | 主背景色 |
| `--bg-elevated` | 卡片/区块背景 |
| `--text-primary` | 主文字色 |
| `--text-secondary` | 次要文字 |
| `--text-muted` | 弱化文字 |
| `--accent-cyan` | 青色强调 |
| `--accent-blue` | 蓝色强调 |
| `--accent-orange` | 橙色强调 |
| `--border-color` | 边框色 |
| `--nav-bg` | 导航栏背景 |

---

## 维护清单（添加文章时逐项检查）

- [ ] 在 `posts/` 下创建了 `.html` 文件
- [ ] 文章内 `<title>` 标签正确
- [ ] 文章内标签导航栏的 tag 链接颜色 class 匹配
- [ ] 文章内 `post-tag` 的 inline style 颜色值正确
- [ ] TOC 侧边栏的链接与正文 `id` 锚点一一对应
- [ ] 文章内 `.nav-inner` 导航栏与首页 `index.html` 同步
- [ ] `assets/posts-data.js` 的 `POSTS_DATA` 数组已添加新条目
- [ ] 新标签已在 `assets/posts-data.js` 的 `TAG_COLORS` 中添加颜色映射，并在 `style.css` 中添加 `tag-xxx` class
- [ ] 图片已放入 `assets/` 且同时提供了 `.png` 和 `.webp` 两份文件
- [ ] `<script src="../assets/common.js"></script>` 已在页面最后引用
- [ ] 图谱侧边栏和懒加载脚本已包含
- [ ] 超过 10 行的代码块能正常折叠，折叠/展开按钮工作正常（`.mk-code-wrap.collapsed` 逻辑已包含）
- [ ] 页面在浏览器打开测试正常（主题切换、代码块按钮、回到顶部、图谱均正常，无 404 资源）

---

> 项目维护者：himobrine · [GitHub](https://github.com/himobrine/wiki)
