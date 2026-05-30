<div align="center">

# `// BLOG : 信息安全实验室`

`RHODES ISLAND :// SECURITY // RESEARCH // EXPLOIT // DEFENSE`

[![Tag](https://img.shields.io/badge/TAG-漏洞分析-00d4ff?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-安全工具-3366ff?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-学习笔记-ff6b35?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-逆向-7b2d8e?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-调试-2ea44f?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-自定义-add?style=flat-square&color=8888a0)](#)

`> 记录信息安全路上的学习、思考与实战。持续更新中 ...`  
`> LOADING - 100% ..................................................................`

</div>

---

## `// NAV // INDEX`

| 🏠 首页 | 🏷 漏洞分析 | 🛠 安全工具 | 📓 学习笔记 | 🔧 逆向 | 🐛 调试 | 📋 标签归档 |
|---------|------------|------------|------------|--------|--------|-----------|

---

## `// LATEST // DOCUMENT`

### `2026 // 05 / 30` [**Windows 逆向调试工具速查手册**](posts/reverse-debugging.html)

`TAGS:` [![](https://img.shields.io/badge/逆向-7b2d8e?style=flat-square)](#) [![](https://img.shields.io/badge/调试-2ea44f?style=flat-square)](#) [![](https://img.shields.io/badge/X64dbg-00d4ff?style=flat-square)](#) [![](https://img.shields.io/badge/Windbg-3366ff?style=flat-square)](#) [![](https://img.shields.io/badge/学习笔记-ff6b35?style=flat-square)](#)

> 一份全面系统的 Windows 逆向工程与调试工具速查手册，涵盖 **X64dbg**、**Windbg**、**OllyDbg (Onlydbg)** 三大调试器的核心快捷键、断点类型、内存操作、寄存器查看、模块管理、异常处理等关键命令与技巧。适合逆向初学者和日常开发调试查阅。

[`[ + ] READ MORE →`](posts/reverse-debugging.html)
---

## `// TAGS // INDEX`

| 标签 | 文章数 |
|------|-------|
| `#漏洞分析` | 2 |
| `#安全工具` | 1 |
| `#学习笔记` | 2 |
| `#逆向` | 1 |
| `#调试` | 1 |
| `#OWASP` | 1 |
| `#CTF` | 1 |
| `#Web安全` | 2 |
| `#供应链安全` | 1 |
| `#CVE` | 1 |
| `#KaliLinux` | 1 |
| `#X64dbg` | 1 |
| `#Windbg` | 1 |
| `#自定义标签` | — 待添加 |

---

<div align="center">

---

`RHODES ISLAND :// SECURITY LAB // BLOG // REV 3.0`

`> 保持好奇 · 保持怀疑 · 保持学习`

`CONNECT // [GitHub](https://github.com/himobrine/wiki) · [Blog](https://github.com/himobrine/wiki)`

`LOADING - 100% ..................................................................`

`(c) 2026 // SECURITY BLOG // ALL RIGHTS RESERVED`

</div>

---

## `// 站点规范 // SITE STANDARDS`

### 文章模板结构 (`posts/`)

```html
<div class="hero"> ... </div>
<a href="../index.html" class="back-link">[ &larr; ] BACK TO HOME</a>
<div class="post">
  <div class="post-date">YYYY // MM / DD</div>
  <div class="post-title">文章标题</div>
  <div class="post-tags">...</div>
  <div class="post-content">
    <nav class="post-toc"><!-- 左侧悬浮目录 --></nav>
    <h4 id="section-id">一级标题</h4>
    <h5 id="sub-id">二级标题</h5>
    ...
  </div>
</div>
<div class="footer">...</div>
<div class="floating-buttons">...</div>
<script>/* theme toggle + back to top + TOC highlight */</script>
```

### 标题层级约定

| 层级 | 标签 | 用途 | 示例 |
|------|------|------|------|
| 一级 | `<h4>` | 主要章节标题 | `<h4 id="overview">概述</h4>` |
| 二级 | `<h5>` | 子节标题 | `<h5 id="xdbg-control">调试控制</h5>` |

- 每个标题必须带唯一 `id` 锚点（英文连字符命名），用于 TOC 跳转
- TOC 侧边栏在 `<nav class="post-toc">` 中维护，两级 `<ul>` 嵌套

### 标签色值映射

| 标签 | 颜色 | CSS class / inline |
|------|------|--------------------|
| #漏洞分析 | `#00d4ff` | `tag-cyan` |
| #安全工具 | `#3366ff` | `tag-blue` |
| #学习笔记 | `#ff6b35` | `tag-orange` |
| #逆向 | `#7b2d8e` | `tag-purple` |
| #调试 | `#2ea44f` | `tag-green` |
| #C/C++ | `#3366ff` | `tag-blue` |
| #底层原理 | `#ff6b35` | `tag-orange` |
| 自定义 | `#8888a0` | `tag-add` |

### CSS 变量主题系统

定义于 `assets/style.css` 的 `:root` 和 `[data-theme="light"]`：

| 变量 | 作用 |
|------|------|
| `--bg-primary` | 主背景色 |
| `--text-primary` / `--text-secondary` / `--text-muted` | 文字色阶 |
| `--accent-cyan` / `--accent-blue` / `--accent-orange` | 强调色 |
| `--border-color` / `--hero-border` / `--post-hover-border` | 边框色 |
| `--nav-bg` / `--nav-bg-stuck` | 导航背景 |

### 图片命名规范

| 前缀 | 用途 | 示例 |
|------|------|------|
| `rd_` | 逆向调试文章截图 | `rd_image001.png` |
| `image`（默认） | 其他文章 | `image001.png` |

### TOC 侧边栏

- 固定悬浮于左侧，随页面滚动高亮当前章节
- 屏幕宽度 < 1200px 时自动隐藏
- 在 `assets/style.css` 中定义 `.post-toc` 系列样式
- 高亮由 `IntersectionObserver` 驱动，添加 `.active` 类
