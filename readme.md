# 信息安全实验室 — 静态博客

纯前端静态安全技术博客，零构建工具依赖，浏览器直开。文章以独立 HTML 文件存放在 `posts/`，首页与标签页通过内置 JavaScript 数据数组驱动渲染。

---

## 目录结构

```
mywiki/
├── index.html              # 首页 — 最新文章列表 + 标签索引
├── links.html              # 友情链接页
├── assets/
│   ├── style.css           # 全局样式（5 套主题）
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

### 步骤 2：更新首页数据

打开 `index.html`，找到 `const POSTS = [...]` 数组，在末尾添加新条目：

```js
{
  title: '文章标题',
  date: '2026 // 06 / 05',
  url: 'posts/your-article.html',
  excerpt: '文章摘要，1-2 句话概述内容',
  tags: ['标签1', '标签2']
}
```

| 字段 | 说明 |
|------|------|
| `title` | 文章标题 |
| `date` | 日期格式 `YYYY // MM / DD`，用于排序 |
| `url` | 相对于 `index.html` 的路径 |
| `excerpt` | 首页展示的摘要文字 |
| `tags` | 标签数组，用于筛选和颜色标注 |

### 步骤 3：更新标签页数据

打开 `tags/list.html`，找到 `const POSTS = [...]` 数组（与首页结构相同），在末尾添加相同条目。`url` 字段需加上 `../` 前缀：

```js
{
  ...,
  url: '../posts/your-article.html',
  ...
}
```

### 步骤 4：添加新标签颜色（可选）

如果使用了全新标签，在 `index.html` 和 `tags/list.html` 的 `TAG_COLORS` 对象中增加颜色映射：

```js
'新标签': '颜色十六进制（不含 #）'
```

颜色值参考：`00d4ff` / `3366ff` / `ff6b35` / `7b2d8e` / `2ea44f` / `e4405f` / `8b5cf6` / `f59e0b` / `10b981`

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
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Titillium+Web:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<div class="scanline"></div>
<div class="container">

<div class="hero">
  <h1>// BLOG : 信息安全实验室</h1>
  <div class="subtitle">RHODES ISLAND <span>://</span> SECURITY <span>//</span> RESEARCH <span>//</span> EXPLOIT <span>//</span> DEFENSE</div>
  <div class="tags-bar">
    <a href="../index.html" class="tag tag-cyan">#首页</a>
    <!-- 为每个标签添加对应颜色的 tag -->
    <a href="../tags/list.html?tag=标签名" class="tag tag-xxx">#标签名</a>
  </div>
  <div class="tagline">&gt; LOADING - 100% <span class="cursor">▌</span></div>
</div>

<div id="navSentinel"></div>

<div class="nav-sticky-wrapper" id="navWrap">
  <div class="nav-inner">
    <a href="../index.html">首页</a>
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
    <span class="post-tag" style="background:#xxxxxx22;color:#xxxxxx;border:1px solid #xxxxxx44">标签名</span>
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
  <div class="brand">RHODES ISLAND <span>://</span> SECURITY LAB <span>//</span> BLOG <span>//</span> REV 3.0</div>
  <div class="motto">&gt; 道可道，非常道，名可名，非常名</div>
  <div class="links">
    <a href="https://github.com/himobrine/wiki">GitHub</a>
    <a href="../links.html">友情链接</a>
  </div>
  <div class="copy">(c) 2026 // SECURITY BLOG</div>
</div>

</div>

<div class="theme-dock" id="themeDock">...</div>
<div class="floating-buttons">...</div>

<script>
/* === 主题切换 + 回到顶部 + TOC 高亮 + 页面滚动动画 === */
// 从其他文章复制完整 script 块
</script>

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
- [ ] `index.html` 的 `POSTS` 数组已添加新条目
- [ ] `tags/list.html` 的 `POSTS` 数组已添加新条目（`url` 带 `../` 前缀）
- [ ] 新标签已在两处 `TAG_COLORS` 中添加颜色映射（如需要）
- [ ] 图片已放入 `assets/` 且路径引用正确
- [ ] 页面在浏览器打开测试正常（无 404 资源）

---

> 项目维护者：himobrine · [GitHub](https://github.com/himobrine/wiki)
