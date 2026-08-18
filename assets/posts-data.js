const POSTS_DATA = [
  {
    title: 'upload-labs 搭建',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 01 / 27',
    url: 'posts/upload-labs.html',
    excerpt: 'upload-labs 是一个使用 php 语言编写的文件上传漏洞靶场，本文介绍 Docker 和 Windows 两种搭建方式。',
    tags: ['Web安全', 'upload-labs']
  },
  {
    title: 'C/C++ 常量：#define 与 const',
    primary: 'C/C++',
    secondary: '基础',
    date: '2026 // 06 / 04',
    url: 'posts/cpp-constants.html',
    excerpt: '深入解析 C/C++ 中 #define 和 const 两种常量定义方式的区别，通过 MinGW 和 MSVC 的预处理器输出对比展示 #define 的宏替换机制，并演示如何通过指针修改 const 变量以及编译器常量传播优化的底层原理（x64 / x86 多平台汇编分析）。',
    tags: ['C/C++', '底层原理', '学习笔记']
  },
  {
    title: 'C/C++ 字符、字符串与指针',
    primary: 'C/C++',
    secondary: '基础',
    date: '2026 // 06 / 02',
    url: 'posts/char-string-pointer.html',
    excerpt: '深入解析 C/C++ 中字符编码（ASCII/Unicode）、字符串存储方式（定长/终结符）、指针与地址的概念与区别、不同指针类型指向同一地址的汇编对比、指针偏移寻址原理，以及 C++ 引用的底层实现（MinGW / MSVC x64 / x86 多平台汇编分析）。',
    tags: ['C/C++', '逆向', '底层原理', '学习笔记']
  },
  {
    title: 'crack实验 — IDA + x64dbg 逆向破解',
    primary: '逆向',
    secondary: 'Crack',
    date: '2026 // 05 / 31',
    url: 'posts/cr-crack-experiment.html',
    excerpt: '使用 IDA 静态分析和 x64dbg 动态调试对一个 CrackMe 程序进行逆向破解，通过修改 je→jne 跳转指令绕过验证，并计算文件偏移进行二进制补丁。',
    tags: ['逆向', '调试', '学习笔记']
  },
  {
    title: '栈溢出2（500分）Writeup — ret2syscall',
    primary: 'CTF',
    secondary: 'Pwn',
    date: '2026 // 05 / 31',
    url: 'posts/stack-overflow2-500pt.html',
    excerpt: '栈溢出2 500pt Writeup：ret2syscall 利用 ROP 链（pop rax/rdi/rsi/rdx/rcx gadgets）在 64 位程序上执行 execve("/bin/bash")，offset 280 字节，pwntools 自动化利用。',
    tags: ['CTF', 'Pwn', '栈溢出']
  },
  {
    title: '栈溢出（500分）Writeup',
    primary: 'CTF',
    secondary: 'Pwn',
    date: '2026 // 05 / 31',
    url: 'posts/stack-overflow-500pt.html',
    excerpt: '栈溢出 500pt Writeup：IDA 分析二进制 → 发现 hackme 函数 → 动态调试改目标 → gets 溢出 → 计算偏移 → 执行 shell 获取 flag。',
    tags: ['CTF', 'Pwn', '栈溢出']
  },
  {
    title: 'MOV Attack — ECC Crypto Writeup',
    primary: 'CTF',
    secondary: 'Crypto',
    date: '2026 // 05 / 31',
    url: 'posts/mov-attack.html',
    excerpt: 'MOV Attack Writeup：利用 Tate pairing 将 ECC 上的离散对数问题归约到有限域扩展域上的 DLP，通过 SageMath 实现攻击并解密 flag。',
    tags: ['CTF', 'Crypto']
  },
  {
    title: '蓝桥杯 Writeup',
    primary: 'CTF',
    secondary: 'Crypto',
    date: '2026 // 05 / 31',
    url: 'posts/re-蓝桥杯wp.html',
    excerpt: '蓝桥杯 Writeup：packet 题目抓包分析 → 分解 n（p q 接近，Fermat 分解）→ RSA 解密脚本 → 获取 flag',
    tags: ['CTF', 'Crypto', 'RSA']
  },
  {
    title: 'Web11 500pt 目录扫描+Webshell+后台提权 Writeup',
    primary: 'CTF',
    secondary: 'Web',
    date: '2026 // 05 / 31',
    url: 'posts/web11-500pt.html',
    excerpt: 'Web11 500pt Writeup：目录扫描发现 dama.php 后门 → 307 跳转绕过 → 登录后台发现 root 用户 → 系统目录遍历获取 flag',
    tags: ['CTF', 'Web安全']
  },
  {
    title: 'Web10 500pt XSS 标签注入 Writeup',
    primary: 'CTF',
    secondary: 'Web',
    date: '2026 // 05 / 31',
    url: 'posts/web-xss-tag-500pt.html',
    excerpt: 'Web10 500pt XSS Writeup：标签系统注入 <script>alert("flag")<\/script> → 6 个标签逐一执行 → 获取 flag',
    tags: ['CTF', 'Web安全', 'XSS']
  },
  {
    title: 'web 06 300pt php的areyouok和strpos绕过 Writeup',
    primary: 'CTF',
    secondary: 'Web',
    date: '2026 // 05 / 31',
    url: 'posts/web-php-areyouok.html',
    excerpt: 'web 06 300pt PHP Writeup：index.php.swp 源码泄露 → areyouok(preg_match)/strpos 绕过 → 获取 flag',
    tags: ['CTF', 'Web安全', 'PHP']
  },
  {
    title: 'newstar Writeup',
    primary: 'CTF',
    secondary: 'Pwn',
    date: '2026 // 05 / 31',
    url: 'posts/newstar-wp.html',
    excerpt: 'newstar Writeup',
    tags: ['CTF', 'Pwn', 'Crypto', 'MISC']
  },
  {
    title: '简单的JAVA逆向 Writeup',
    primary: 'CTF',
    secondary: 'Reverse',
    date: '2026 // 05 / 31',
    url: 'posts/re-java-reverse.html',
    excerpt: '简单的 JAVA 逆向 Writeup：JEB/Jadx/Die 工具选择 → XOR 题 easyapp（key 颠倒 987654321）→ .json 文件题 → 水题实战分析',
    tags: ['CTF', '逆向', 'Java']
  },
  {
    title: 'loding (50分)',
    primary: 'CTF',
    secondary: 'Pwn',
    date: '2026 // 05 / 31',
    url: 'posts/re-loding-50pt.html',
    excerpt: 'loding (50分) Pwn 题 Writeup：32 位 ELF 利用 mmap 分配可执行内存，scanf 读入整数转 float/2333.0 后执行，通过 IEEE 754 浮点编码将 shellcode 字节编码为对应整数输入，最终获取 shell。',
    tags: ['CTF', '逆向', 'Pwn']
  },
  {
    title: 'GetFlag 50pt',
    primary: 'CTF',
    secondary: 'Web',
    date: '2026 // 05 / 31',
    url: 'posts/web-getflag-50pt.html',
    excerpt: 'GetFlag 50pt Web 题 Writeup：CAPTCHA 验证码 MD5 前 6 位碰撞 → Python 脚本爆破 → SQL 注入万能密码登录 → PHP eval 参数过滤绕过 + 分号截断获取 flag',
    tags: ['CTF', 'Web安全', 'MD5碰撞']
  },
  {
    title: '4.re Smali — Smali CTF Writeup',
    primary: 'CTF',
    secondary: 'Reverse',
    date: '2026 // 05 / 31',
    url: 'posts/re-smali.html',
    excerpt: 'Smali 逆向分析 —— JEB / jadx 双工具对比，Base64 + AES ECB 解密',
    tags: ['CTF', '逆向']
  },
  {
    title: '4.re RC4-500pt —— 两种解题方法',
    primary: 'CTF',
    secondary: 'Reverse',
    date: '2026 // 05 / 31',
    url: 'posts/re-rc4-500pt.html',
    excerpt: 'RC4-500pt 逆向题两种解题方法：Patch + IDA 动态调试与直接动调堆栈秒出结果',
    tags: ['CTF', '逆向', 'RC4']
  },
  {
    title: '4.re 蓝桥杯逆向三道WP',
    primary: 'CTF',
    secondary: 'Reverse',
    date: '2026 // 05 / 31',
    url: 'posts/re-lanqiao.html',
    excerpt: '蓝桥杯逆向三道 Writeup：XOR（exeinfope + IDA 脚本 → flag）、base64++（shift+F12 + 在线解码）、Map（IDApython 迷宫 + DFS → 路径 MD5）',
    tags: ['CTF', '逆向', '蓝桥杯']
  },
  {
    title: '123 150pt —— 一句话木马文件上传 Writeup',
    primary: 'CTF',
    secondary: 'Web',
    date: '2026 // 05 / 31',
    url: 'posts/web-upload-150pt.html',
    excerpt: '123 150pt 文件上传 Writeup：后台扫描 .bak 备份文件 → 爆破年份 1995 登录 → F12 发现上传表单 → 一句话木马 PHP 后缀绕过 → 双写绕过 cat 过滤拿到 flag',
    tags: ['CTF', 'Web安全', '文件上传']
  },
  {
    title: '4.re CrackMe01 Writeup — IDA 逆向分析',
    primary: '逆向',
    secondary: 'Crack',
    date: '2026 // 05 / 31',
    url: 'posts/re-crackme01.html',
    excerpt: '32 位无壳 CrackMe 逆向分析，使用 IDA 定位 DefWindowProc 回调函数，F5 反编译后提取关键数组 chText 和常量 v6，通过 XOR 运算求解 flag。',
    tags: ['逆向']
  },
  {
    title: '[V&N2022公开赛] easy_RSA Writeup',
    primary: 'CTF',
    secondary: 'Crypto',
    date: '2026 // 05 / 31',
    url: 'posts/vn2022-easy-rsa.html',
    excerpt: 'V&N2022 公开赛 easy_RSA 题目 Writeup，涉及多素数 RSA、p+1 分解、模 p² 下逆元恢复 q、Tonelli-Shanks 算法求二次剩余等 RSA 相关技巧。',
    tags: ['CTF', 'RSA', 'Crypto']
  },
  {
    title: 'Windows 逆向调试工具速查手册',
    primary: '逆向',
    secondary: '工具',
    date: '2026 // 05 / 30',
    url: 'posts/reverse-debugging.html',
    excerpt: '一份全面系统的 Windows 逆向工程与调试工具速查手册，涵盖 X64dbg、Windbg 及 OllyDbg 三大调试器的完整操作指南，附带 42 张实操截图。',
    tags: ['逆向', '调试', 'X64dbg', 'Windbg', '学习笔记']
  },
  {
    title: 'C/C++ 基本变量数据类型的内存表示',
    primary: 'C/C++',
    secondary: '基础',
    date: '2026 // 05 / 30',
    url: 'posts/variable-memory-layout.html',
    excerpt: '深入分析 C/C++ 基本数据类型（int、unsigned int、float、double）在内存中的表示方式，涵盖有符号/无符号整型的补码存储、IEEE 754 浮点编码等。',
    tags: ['C/C++', '逆向', '底层原理', '调试']
  },
  {
    title: 'DVWA 靶场 Command Injection 全难度教程（附带代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2026 // 05 / 27',
    url: 'posts/dvwa-command-execution.html',
    excerpt: 'DVWA 靶场 Command Injection 全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', '命令注入']
  },
  {
    title: 'DVWA 靶场搭建 - Windows phpstudy & Kali Docker 部署教程',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2026 // 04 / 27',
    url: 'posts/dvwa-setup.html',
    excerpt: '利用 phpstudy 搭建 DVWA 靶场完整流程，以及 基于 Docker 的 DVWA 部署方法，涵盖源码下载、配置文件修改、数据库初始化、Docker 换源与镜像部署，以及常见问题（allow_url_include、reCAPTCHA key）的解决方案。',
    tags: ['Web安全', 'DVWA', '靶场搭建']
  },
  {
    title: 'DVWA 靶场 File Inclusion 全难度教程（附代码解析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2026 // 04 / 12',
    url: 'posts/dvwa-file-inclusion.html',
    excerpt: 'DVWA 靶场 File Inclusion（文件包含）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（本地文件读取、远程文件包含、伪协议利用）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', '文件包含']
  },
  {
    title: 'DVWA 靶场 Brute Force（暴力破解）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2026 // 03 / 28',
    url: 'posts/dvwa-brute-force.html',
    excerpt: 'DVWA 靶场 Brute Force（暴力破解）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（Burp Suite 抓包爆破、Resource Pool 时停设置、Anti-CSRF Token 绕过、Python 脚本自动化爆破）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', '暴力破解']
  },
  {
    title: 'DVWA 靶场 CSRF（跨站请求伪造）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2026 // 03 / 06',
    url: 'posts/dvwa-csrf.html',
    excerpt: 'DVWA 靶场 CSRF（跨站请求伪造）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（URL 直接修改密码、Referer 绕过、XSS+CSRF 结合获取 Token、PDO 预编译+原密码验证）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', 'CSRF']
  },
  {
    title: 'DVWA 靶场 Weak Session IDs（弱会话IDs）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2026 // 03 / 02',
    url: 'posts/dvwa-weak-session-ids.html',
    excerpt: 'DVWA 靶场 Weak Session IDs（弱会话 IDs）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（递增 Session 预测、时间戳 Cookie 劫持、MD5 加密枚举、SHA1 随机数防御）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', '会话安全']
  },
  {
    title: 'DVWA 靶场 Insecure CAPTCHA（不安全的验证码）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2025 // 07 / 05',
    url: 'posts/dvwa-insecure-captcha.html',
    excerpt: 'DVWA 靶场 Insecure CAPTCHA（不安全的验证码）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（两步验证绕过、passed_captcha 参数伪造、User-Agent 与隐藏值绕过、PDO 预编译+原密码验证）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', '验证码']
  },
  {
    title: 'DVWA 靶场 File Upload 全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2025 // 05 / 08',
    url: 'posts/dvwa-file-upload.html',
    excerpt: 'DVWA 靶场 File Upload（文件上传）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（一句话木马上传、图片马制作、Burp 改后缀绕过、文件包含配合利用）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', '文件上传']
  },
  {
    title: 'DVWA 靶场 Reflected Cross Site Scripting (XSS)（跨站脚本攻击）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2024 // 05 / 18',
    url: 'posts/dvwa-xss-reflected.html',
    excerpt: 'DVWA 靶场 Reflected Cross Site Scripting (XSS)（跨站脚本攻击）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（&lt;script&gt; 注入、大小写绕过、&lt;img onerror&gt; 绕过）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', 'XSS']
  },
  {
    title: 'DVWA 靶场 Authorisation Bypass（未授权访问）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2024 // 05 / 19',
    url: 'posts/dvwa-auth-bypass.html',
    excerpt: 'DVWA 靶场 Authorisation Bypass（未授权访问）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（直接 URL 访问、get_user_data.php 越权、POST 参数篡改）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', '未授权访问']
  },
  {
    title: 'DVWA 靶场 Open HTTP Redirect（开放重定向漏洞）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2024 // 05 / 20',
    url: 'posts/dvwa-open-http-redirect.html',
    excerpt: 'DVWA 靶场 Open HTTP Redirect（开放重定向漏洞）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（直接 URL 跳转、路径穿越绕过、参数注入绕过）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', 'URL重定向']
  },
  {
    title: 'DVWA 靶场 Content Security Policy (CSP) Bypass(CSP绕过)全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2024 // 05 / 14',
    url: 'posts/dvwa-csp-bypass.html',
    excerpt: 'DVWA 靶场 Content Security Policy (CSP) Bypass 全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（CSP 白名单绕过、unsafe-inline + nonce 绕过、JSONP 回调函数注入）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', 'CSP绕过']
  },
  {
    title: 'DVWA 靶场 JavaScript Attacks(js攻击)全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2024 // 05 / 14',
    url: 'posts/dvwa-javascript-attacks.html',
    excerpt: 'DVWA 靶场 JavaScript Attacks（JS 攻击）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（MD5+ROT13 Token 计算、字符串反转绕过、SHA256 混淆 JS 逆向分析）及 PHP/JS 代码分析。',
    tags: ['Web安全', 'DVWA', 'JS攻击']
  },
  {
    title: 'DVWA 靶场 SQL Injection（SQL 注入）全难度教程（附代码分析）',
    primary: 'Web安全',
    secondary: 'DVWA',
    date: '2023 // 04 / 04',
    url: 'posts/dvwa-sql-injection.html',
    excerpt: 'DVWA 靶场 SQL Injection（SQL 注入）全难度通关教程，涵盖 Low / Medium / High / Impossible 四个级别的漏洞原理、实际利用（手工联合查询注入、sqlmap 自动化注入、POST 注入绕过）及 PHP 代码分析。',
    tags: ['Web安全', 'DVWA', 'SQL注入']
  },
  {
    title: 'CVE-2019-11043 PHP 远程代码执行漏洞',
    primary: 'Web安全',
    secondary: 'Vulhub',
    date: '2023 // 02 / 17',
    url: 'posts/vulhub-cve-2019-11043.html',
    excerpt: 'CVE-2019-11043 是 Nginx+php-fpm 环境下的 PHP RCE 漏洞，通过 fastcgi_split_path_info 处理 %0a 的缺陷导致任意代码执行。',
    tags: ['Web安全', 'Vulhub', 'CVE']
  },
  {
    title: 'CVE-2018-19518 PHP imap 远程命令执行漏洞',
    primary: 'Web安全',
    secondary: 'Vulhub',
    date: '2023 // 02 / 17',
    url: 'posts/vulhub-cve-2018-19518.html',
    excerpt: 'CVE-2018-19518 是 PHP imap 扩展中的远程命令执行漏洞，影响多个 PHP 版本及 Debian Linux。通过 imap_open 函数的 ProxyCommand 参数注入实现命令执行。',
    tags: ['Web安全', 'Vulhub', 'CVE']
  },
  {
    title: 'CVE-2012-1823 PHP-CGI 远程代码执行漏洞',
    primary: 'Web安全',
    secondary: 'Vulhub',
    date: '2023 // 02 / 12',
    url: 'posts/vulhub-cve-2012-1823.html',
    excerpt: 'CVE-2012-1823 是 PHP-CGI 模式下的高危 RCE 漏洞，影响 PHP < 5.3.12 / < 5.4.2。利用 querystring 参数注入配合 Metasploit 实现远程代码执行。',
    tags: ['Web安全', 'Vulhub', 'CVE']
  },
  {
    title: 'Vulhub 搭建方法',
    primary: 'Web安全',
    secondary: 'Vulhub',
    date: '2023 // 02 / 13',
    url: 'posts/vulhub-setup.html',
    excerpt: 'Vulhub 是一个基于 docker 和 docker-compose 的漏洞环境集合，进入对应目录并执行一条语句即可启动一个全新的漏洞环境。',
    tags: ['靶场搭建', 'Vulhub']
  },
  {
    title: 'upload-labs 第一二关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 01 / 27',
    url: 'posts/upload-labs-pass1-2.html',
    excerpt: 'upload-labs Pass-1 和 Pass-2 通关教程：前端 JS 校验绕过、Burp 抓包改后缀、禁用 JavaScript 上传、Content-Type 类型绕过，附源码分析。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第三四关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 04 / 12',
    url: 'posts/upload-labs-pass3-4.html',
    excerpt: 'upload-labs Pass-3 和 Pass-4 通关教程：Apache2 httpd.conf 配置修改、反弹 shell 连接、免杀木马使用、webshell 获取 shell。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第五六关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 10 / 28',
    url: 'posts/upload-labs-pass5-6.html',
    excerpt: 'upload-labs Pass-5 和 Pass-6 通关教程：黑名单大小写绕过（.Php）、后缀加空格绕过黑名单检测。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第七八关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2025 // 12 / 29',
    url: 'posts/upload-labs-pass7-8.html',
    excerpt: 'upload-labs Pass-7 和 Pass-9 通关教程：后缀加空格绕过黑名单、点空格点双写绕过黑名单检测。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第九十关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2025 // 05 / 17',
    url: 'posts/upload-labs-pass9-10.html',
    excerpt: 'upload-labs Pass-9 和 Pass-10 通关教程：点空格点绕过黑名单、str_ireplace 双写绕过（pphphp）。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第十一十二关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 04 / 18',
    url: 'posts/upload-labs-pass11-12.html',
    excerpt: 'upload-labs Pass-11 和 Pass-12 通关教程：%00截断（GET，PHP<5.3.4）、POST 00截断修改 hex，以及 PHP 版本切换方法。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第十三十四关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 04 / 18',
    url: 'posts/upload-labs-pass13-14.html',
    excerpt: 'upload-labs Pass-13 和 Pass-14 通关教程：文件头检测绕过（getReailFileType 读前2字节判断格式）、图片马制作与文件包含配合利用。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第十五十六关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 04 / 18',
    url: 'posts/upload-labs-pass15-16.html',
    excerpt: 'upload-labs Pass-15 和 Pass-16 通关教程：exif_imagetype 检测绕过（开启 php_exif 模块）、图片二次渲染绕过（010 editor 对比找未修改位置插入木马）。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第十七十八关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 04 / 18',
    url: 'posts/upload-labs-pass17-18.html',
    excerpt: 'upload-labs Pass-17 和 Pass-18 通关教程：条件竞争绕过（先上传后判断，Python+Burp 窗口期利用）、MyUpload 白名单图片马配合文件包含解析。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'upload-labs 第十九二十关',
    primary: 'Web安全',
    secondary: 'upload-labs',
    date: '2024 // 12 / 19',
    url: 'posts/upload-labs-pass19-20.html',
    excerpt: 'upload-labs Pass-19 和 Pass-20 通关教程：00截断绕过（save_name + pathinfo 黑名单）、数组绕过（save_name 传数组使 end() 返回合法后缀绕过检测）。',
    tags: ['Web安全', 'upload-labs', '文件上传']
  },
  {
    title: 'vulhub靶机activemq环境下的CVE-2015-5254（ActiveMQ 反序列化漏洞）',
    primary: 'Web安全',
    secondary: 'Vulhub',
    date: '2024 // 02 / 01',
    url: 'posts/vulhub-cve-2015-5254.html',
    excerpt: 'Apache ActiveMQ 5.x ~ 5.13.0 版本中存在反序列化漏洞，远程攻击者可通过制作特制的序列化 Java 消息服务 (JMS) ObjectMessage 对象执行任意代码。使用 vulhub 搭建漏洞环境并利用 jmet 工具实现反弹 shell。',
    tags: ['Web安全', 'Vulhub', 'CVE']
  },
  {
    title: 'vulhub靶机activemq环境下的CVE-2016-3088（ActiveMQ任意文件写入漏洞）',
    primary: 'Web安全',
    secondary: 'Vulhub',
    date: '2024 // 02 / 02',
    url: 'posts/vulhub-cve-2016-3088.html',
    excerpt: 'Apache ActiveMQ 5.x~5.14.0 版本中 fileserver 接口存在任意文件写入漏洞，可通过 PUT 上传文件结合 MOVE 请求移动至可执行目录，实现 webshell 上传和反弹 shell。',
    tags: ['Web安全', 'Vulhub', 'CVE']
  },
  {
    title: 'vulhub靶机struts2环境下的s2-032（CVE-2016-3081）（远程命令执行漏洞）',
    primary: 'Web安全',
    secondary: 'Vulhub',
    date: '2024 // 08 / 07',
    url: 'posts/vulhub-cve-2016-3081.html',
    excerpt: 'Struts 2.3.19~2.3.28 版本中动态方法调用（DMI）功能存在远程命令执行漏洞，攻击者可通过 method: 前缀构造恶意 OGNL 表达式实现任意命令执行。',
    tags: ['Web安全', 'Vulhub', 'CVE']
  },
  {
    title: 'The Planets: Earth — Vulnhub 靶机渗透教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 01 / 10',
    url: 'posts/vulnhub-earth.html',
    excerpt: 'VulnHub 靶机 The Planets: Earth 渗透教程，涵盖信息收集（nmap、DNS 解析、dirb 扫描）、XOR 解密登录、反弹 Shell 绕过、SUID 提权（reset_root 文件条件触发）获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'Matrix-Breakout 2 Morpheus — Vulnhub 靶机渗透教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 01 / 11',
    url: 'posts/vulnhub-morpheus.html',
    excerpt: 'VulnHub 靶机 Matrix-Breakout 2 Morpheus 渗透教程，涵盖信息收集（lansee、nmap、ffuf 目录爆破）、graffiti.php 文件写入漏洞上传 webshell、蚁剑连接、反弹 shell、隐藏图片 binwalk 分析、CVE-2022-0847 Dirty Pipe 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶场red:1教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 07 / 14',
    url: 'posts/vulnhub-red1.html',
    excerpt: 'VulnHub 靶机 Red: 1 渗透教程，涵盖信息收集（arp-scan、nmap 端口扫描）、域名绑定 redrocks.win、gobuster 后门扫描发现 NetworkFileManagerPHP WebShell、后门利用与反弹 Shell、pspy64s 监控后台进程、supersecretfileuc.c 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Napping1.0.1教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 07 / 19',
    url: 'posts/vulnhub-napping.html',
    excerpt: 'VulnHub 靶机 Napping 1.0.1 渗透教程，涵盖信息收集（arp-scan、nmap 端口/版本/漏洞扫描）、Web 渗透（注册登录、Tabnabbing 反向标签劫持钓鱼攻击获取 SSH 凭证）、administrators 组文件发现、query.py 定时任务写入反弹 Shell、vim sudo 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶场noob：1教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 07 / 18',
    url: 'posts/vulnhub-noob.html',
    excerpt: 'VulnHub 靶机 Noob: 1 渗透教程，涵盖信息收集（arp-scan、nmap 端口扫描）、FTP 匿名登录获取 base64 编码凭证、Web 登录与目录扫描发现 downloads.rar、Steghide 隐写提取 funny.jpg/funny.bmp、ROT13 解码获取 SSH 凭证、nano sudo 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机ica：1教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 07 / 22',
    url: 'posts/vulnhub-ica1.html',
    excerpt: 'VulnHub 靶机 ICA: 1 渗透教程，涵盖信息收集（arp-scan、nmap 端口/版本/漏洞扫描）、qdpm 数据库配置泄露、MySQL 爆破、base64 密码解码、SSH 爆破、get_access SUID 提权（PATH 劫持）获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Thales:1教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 07 / 26',
    url: 'posts/vulnhub-thales1.html',
    excerpt: 'VulnHub 靶机 Thales: 1 渗透教程，涵盖信息收集（arp-scan、nmap 扫描）、Tomcat 后台爆破、WAR 后门上传、SSH 私钥破解（ssh2john+rockyou）、backup.sh 定时任务提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Empire LupinOne教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 08 / 01',
    url: 'posts/vulnhub-lupinone.html',
    excerpt: 'VulnHub 靶机 Empire LupinOne 渗透教程，涵盖信息收集（robots.txt 隐藏目录）、逐层目录爆破（dirb/wfuzz/ffuf）、BASE58 编码 SSH 私钥解码、john 爆破、Python 模块劫持提权、pip 恶意 setup.py root 提权。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Deathnote教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 08 / 10',
    url: 'posts/vulnhub-deathnote.html',
    excerpt: 'VulnHub 靶机 Deathnote 渗透教程，涵盖信息收集（robots.txt 域名绑定）、WordPress 用户名枚举与密码爆破（wpscan+cewl）、dirb 目录扫描、hydra SSH 爆破、OoK 解码与 base64 解码提权至 root。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机DarkHole_2教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 08 / 20',
    url: 'posts/vulnhub-darkhole2.html',
    excerpt: 'VulnHub 靶机 DarkHole_2 渗透教程，涵盖 Git 源码泄露恢复历史凭证、SQL 注入（sqlmap 枚举 SSH 凭证）、本地 webshell 发现与 RCE、反弹 Shell、信息收集提权至 root。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Solstice',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 09 / 08',
    url: 'posts/vulnhub-solstice.html',
    excerpt: 'VulnHub 靶机 Solstice 渗透教程，涵盖 ARP 扫描、nmap 端口/版本/漏洞扫描、Apache 日志污染 LFI 漏洞利用（任意文件读取 + PHPSESSID getshell）、反弹 Shell、SUID 提权及 57 端口 Web 服务提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机02-Breakout',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 08 / 30',
    url: 'posts/vulnhub-breakout.html',
    excerpt: 'VulnHub 靶机 Breakout 渗透教程，涵盖 ARP 扫描、nmap 端口/版本/漏洞扫描、网页源码 Brainfuck 密码解码、enum4linux 用户枚举、Webmin 后台登录命令执行、反弹 Shell 及 tar 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机EvilBox---One',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 09 / 02',
    url: 'posts/vulnhub-evilbox-one.html',
    excerpt: 'VulnHub 靶机 EvilBox-One 渗透教程，涵盖 ARP 扫描、nmap 端口扫描、ffuf 参数爆破、LFI 任意文件读取 SSH 私钥、John 爆破密钥、SSH 登录及 /etc/passwd 可写提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Brainpan',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 09 / 11',
    url: 'posts/vulnhub-brainpan.html',
    excerpt: 'VulnHub 靶机 Brainpan 渗透教程，涵盖 ARP 扫描、nmap 端口/版本/漏洞扫描、dirb 目录枚举、brainpan.exe 缓冲区溢出漏洞分析（Immunity Debugger 偏移量计算/坏字符排查/JMP ESP 定位）、msfvenom shellcode 生成、反弹 Shell 及 sudo anansi_util 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Thoth-Tech',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 09 / 16',
    url: 'posts/vulnhub-thothtech.html',
    excerpt: 'VulnHub 靶机 Thoth-Tech 渗透教程，涵盖 ARP 扫描、nmap 端口/服务/漏洞扫描、FTP 匿名登录获取凭证、hydra SSH 爆破、shell 交互式提升及 sudo find 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Looz',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 09 / 17',
    url: 'posts/vulnhub-looz.html',
    excerpt: 'VulnHub 靶机 Looz 渗透教程，涵盖 ARP 扫描、nmap 端口/服务/漏洞扫描、8081 端口抓包获取域名、WordPress 后台用户枚举、hydra SSH 爆破、SUID 提权（shell_testv1.0 获取 root flag）。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机DoubleTrouble',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 10 / 06',
    url: 'posts/vulnhub-doubletrouble.html',
    excerpt: 'VulnHub 靶机 DoubleTrouble 渗透教程（双靶场）。Part1：ARP 扫描、nmap 端口/服务/漏洞扫描、dirsearch 目录枚举、steghide 图片隐写爆破、qdPM 文件上传反弹 Shell、awk 提权获取 root、发现第二台 ova 靶机。Part2：ARP 扫描、nmap 扫描、SQL 注入 sqlmap 脱库获取凭证、SSH 登录、DirtyCow 内核提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Vegeta',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 08',
    url: 'posts/vulnhub-vegeta.html',
    excerpt: 'VulnHub 靶机 Vegeta 渗透教程，涵盖 ARP 扫描、nmap 端口/服务/漏洞扫描、dirsearch 目录爆破、robots.txt 隐藏路径、Base64 多层解码生成 PNG 二维码扫码获取密码、大字典 dirsearch 发现 bulma 目录摩斯密码、SSH 登录及 openssl passwd 修改 /etc/passwd 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Funbox11',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 08',
    url: 'posts/vulnhub-funbox11.html',
    excerpt: 'VulnHub 靶机 Funbox11 (Scriptkiddie) 渗透教程，涵盖 ARP 扫描、nmap 端口/服务/漏洞扫描、Web 信息收集发现 WordPress、wpscan 用户枚举、FTP ProFTPD 1.3.3c 漏洞利用（searchsploit 16921）、Metasploit 远程 exploit 获取 root shell。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'The Planets: Venus — Vulnhub 靶机渗透教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 11 / 15',
    url: 'posts/vulnhub-venus.html',
    excerpt: 'VulnHub 靶机 The Planets: Venus 渗透教程，涵盖 ARP 扫描、nmap 端口/版本/漏洞扫描、HTTP Alternative Services 分析、目录爆破、BurpSuite Cookie 伪造（base64 + ROT13 解密）、Hydra 用户名枚举、SSH 登录及 Polkit CVE-2021-4034 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'Momentum: 1 — Vulnhub 靶机渗透教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 11 / 15',
    url: 'posts/vulnhub-momentum.html',
    excerpt: 'VulnHub 靶机 Momentum: 1 渗透教程，涵盖信息收集、端口扫描、Web JS 分析发现 AES 加密与密钥、XSS 注入获取 Cookie、AES 解密获取 Redis 凭证、Redis 数据库密码枚举及提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'Momentum: 2 — Vulnhub 靶机渗透教程',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2023 // 11 / 20',
    url: 'posts/vulnhub-momentum2.html',
    excerpt: 'VulnHub 靶机 Momentum: 2 渗透教程，涵盖 ARP 扫描、nmap 端口/服务/漏洞扫描、目录爆破、源码 .bak 泄露分析、admin cookie 爆破、文件上传绕过（txt 限制 + secure=val1d 校验）、反弹 Shell、SSH 登录（密码 * 后缀）及 Python 脚本 seed 参数命令注入提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Presidential',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 08',
    url: 'posts/vulnhub-presidential.html',
    excerpt: 'VulnHub 靶机 Presidential 渗透教程，涵盖 ARP 扫描、端口/服务/漏洞扫描、域名绑定、子域名爆破、phpmyadmin LFI + Session getshell、密码爆破、SSH 登录及 tar 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Aragog-1.0.2',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-aragog.html',
    excerpt: 'VulnHub 靶机 Aragog 1.0.2 渗透测试教程，涵盖 WordPress（WP-File-Manager 漏洞）利用、数据库密码获取、john 爆破、SSH 登录及自定义脚本提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Gigachad:1',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 02 / 13',
    url: 'posts/vulnhub-gigachad.html',
    excerpt: 'VulnHub 靶机 Gigachad:1 渗透教程，涵盖 ARP 扫描、nmap 端口/服务/漏洞扫描、FTP 匿名登录获取压缩包、百度识图破解密码、SSH 登录及脏牛提权获取 root shell。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Orasi',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 02 / 15',
    url: 'posts/vulnhub-orasi.html',
    excerpt: 'VulnHub 靶机 Orasi 渗透教程，涵盖主机发现、端口/漏洞扫描、FTP 匿名登录获取可执行文件、IDA 逆向分析、SSTI 模板注入获取 shell、Jadx APK 逆向分析及 HEX 编码命令执行提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Phineas',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-phineas.html',
    excerpt: 'VulnHub 靶机 Phineas 渗透测试教程，涵盖主机发现、端口扫描、Web 目录扫描、Fuel CMS 漏洞利用获取 shell、SSH 登录、Pickle 反序列化漏洞分析及提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Prime-2021-2',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-prime2.html',
    excerpt: 'VulnHub 靶机 Prime-2021-2 渗透测试教程，涵盖信息收集、端口扫描、WordPress 插件 GraceMedia LFI 漏洞利用、文件下载分析、一句话木马上传、反弹 Shell、SMB 信息收集、SSH 密钥登录及提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudo FOG',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-fog.html',
    excerpt: 'VulnHub 靶机 hacksudo FOG 渗透教程，涵盖主机发现、端口扫描、凯撒加密解密、目录爆破、CMS 后台漏洞利用、反弹 Shell、shadow 爆破、Python 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Pylington',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-pylington.html',
    excerpt: 'VulnHub 靶机 Pylington 渗透测试教程，涵盖主机发现、端口扫描、robots.txt 隐藏路径发现、Python 沙盒绕过防火墙、反弹 Shell 及提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Ki:1',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-ki.html',
    excerpt: 'VulnHub 靶机 Ki:1 渗透教程，涵盖主机发现、端口扫描、debug.php 参数爆破、Apache 环境变量泄露、Python 脚本修改利用、反弹 Shell 及 linpeas 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Odin:1',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-odin.html',
    excerpt: 'VulnHub 靶机 Odin:1 渗透教程，涵盖主机发现、端口扫描、域名绑定、Base64/Base32 解码、WP 框架识别、Brainfuck 解码、图片隐写获取后台凭证、Webshell 上传及提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Chill_Hack',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 22',
    url: 'posts/vulnhub-chillhack.html',
    excerpt: 'VulnHub 靶机 Chill Hack 渗透教程，涵盖主机发现、端口扫描、Web 命令执行漏洞利用反弹 Shell、图片隐写分析、密码爆破、FTP 匿名登录获取凭证、SSH 登录及 Docker 逃逸提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机BlueSky',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 22',
    url: 'posts/vulnhub-bluesky.html',
    excerpt: 'VulnHub 靶机 BlueSky 渗透教程，涵盖主机发现、端口扫描、Tomcat Struts2 CVE-2017-5638 漏洞利用、反弹 Shell、Firefox 浏览器密码导出及 SSH 登录获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机HotelWW',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 23',
    url: 'posts/vulnhub-hotelww.html',
    excerpt: 'VulnHub 靶机 HotelWW 渗透教程，涵盖主机发现、SOCKS5 代理爆破、Proxychains 内网穿透、XSS 漏洞利用、文件上传 Getshell、SQL 注入及 Linpeas 信息收集提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Gaara',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 24',
    url: 'posts/vulnhub-gaara.html',
    excerpt: 'VulnHub 靶机 Gaara 渗透教程，涵盖主机发现、目录爆破、Base64 解码获取 SSH 凭证、Brainfuck 编码分析及 GDB sudo 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机BlueMoon',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 24',
    url: 'posts/vulnhub-bluemoon.html',
    excerpt: 'VulnHub 靶机 BlueMoon 渗透教程，涵盖主机发现、目录爆破、二维码解码获取凭证、Hydra SSH 爆破及 Docker 组提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Immersion Machine',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 24',
    url: 'posts/vulnhub-immersion-machine.html',
    excerpt: 'VulnHub 靶机 Immersion Machine 渗透教程，涵盖主机发现、目录爆破、LFI 文件包含漏洞读取密码、SSH 登录及提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Clover',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 24',
    url: 'posts/vulnhub-clover.html',
    excerpt: 'VulnHub 靶机 Clover 渗透教程，涵盖主机发现、目录爆破、SQL 注入获取数据库信息、MD5 密码破解、SSH 登录及字典爆破提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Midwest',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 01 / 25',
    url: 'posts/vulnhub-midwest.html',
    excerpt: 'VulnHub 靶机 Midwest 渗透教程，涵盖主机发现、WPScan 用户枚举、Nagios WAF 绕过、密码爆破、反弹 Shell 及 Nagios 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机De-ICE_S2.100',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 05 / 26',
    url: 'posts/vulnhub-deice-s2100.html',
    excerpt: 'VulnHub 靶机 De-ICE_S2.100 渗透教程，涵盖主机发现、端口扫描、SMTP 用户枚举、目录爆破获取凭证、SSH 登录、邮件分析获取密码及 vi sudo 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Hack_Me_Please',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 06 / 03',
    url: 'posts/vulnhub-hackmeplease.html',
    excerpt: 'VulnHub 靶机 Hack_Me_Please 渗透教程，涵盖主机发现、端口扫描、seeddms CMS 识别、目录爆破配置文件泄露、MySQL 远程连接修改 MD5 密码、后台登录上传 Shell 及提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机XPTO System: 1',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2024 // 06 / 04',
    url: 'posts/vulnhub-xpto.html',
    excerpt: 'VulnHub 靶机 XPTO System:1 渗透教程，涵盖主机发现、端口扫描、robots.txt 隐藏路径、Base64 多层解码获取 SSH 密钥、SSH 连接及 Docker 环境提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudo search',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-search.html',
    excerpt: 'VulnHub 靶机 hacksudo search 渗透教程，涵盖主机发现、端口扫描、Web 信息收集、参数 fuzz 发现文件包含漏洞、远程文件包含 getshell、环境变量提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机coffeeaddicts',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-coffeeaddicts.html',
    excerpt: 'VulnHub 靶机 Coffee Addicts 渗透教程，涵盖主机发现、端口扫描、域名绑定、WordPress 后台利用、反弹 Shell 及 cstr 提权获取 root flag。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-1',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-1 渗透教程，涵盖 Linux 提权综合训练，涉及 apt-get、arp、awk、base32/base64、cat、comm、cp、url、cut、dash、date、diff、find、ftp、gcc、gdb、ip、pip、perl、socket、vi、view、wget、watch、zip 等 25+ 种 sudo 命令滥用提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-2',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe2.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-2 渗透教程，继续深入 Linux 提权训练，涵盖 ar、ash、atobm、base32、base64、bash、cat、chmod、chown、chroot、cp、cpulimit、cut、dash、date、diff、echo、egrep、env、expand、expect、expr、factor、fgrep、find、fmt、fold、gdb、grep、head、hexdump、id、iconv、install、ionice、iptables、join、jq、ksh、last、ldconfig、less、logrotate、look、make、mv、nano、nl 等 60+ 种 sudo 命令滥用提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-3',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe3.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-3 渗透教程，涵盖 gdb、node、perl、php、python、ruby、python3 等 7 种命令的 sudo 滥用提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-4',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe4.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-4 渗透教程，涵盖 apt-get PATH 劫持和 ftp 文件读写提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-5',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe5.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-5 渗透教程，涵盖 /etc/passwd 可写和 script 命令滥用提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-6',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe6.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-6 渗透教程，涵盖 cpio 和 git 命令的 sudo 滥用提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-7',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe7.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-7 渗透教程，涵盖 Docker 容器逃逸提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机hacksudoLPE中Challenge-8',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hacksudo-lpe8.html',
    excerpt: 'VulnHub 靶机 hacksudoLPE Challenge-8 渗透教程，涵盖通配符（Wildcard）滥用提权技巧。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'vulnhub靶机Hackxor:1',
    primary: 'Web安全',
    secondary: 'vulnhub',
    date: '2026 // 06 / 09',
    url: 'posts/vulnhub-hackxor.html',
    excerpt: 'VulnHub 靶机 Hackxor:1 渗透教程，涵盖主机发现、端口扫描、Hosts 绑定、wraithmail 代理利用、SQL 注入（utrack / cloaknet）及后续关卡提示。',
    tags: ['vulnhub', '渗透测试']
  },
  {
    title: 'adversarial_ml_ctf靶场搭建',
    primary: 'AI安全',
    secondary: 'CTF',
    date: '2026 // 06 / 19',
    url: 'posts/adversarial-ml-ctf-setup.html',
    excerpt: 'adversarial_ml_ctf是一个展示人工神经网络对对抗图像存在安全漏洞的CTF挑战，本文介绍Docker搭建和源码构建两种方式。',
    tags: ['AI安全', '靶场搭建']
  },
  {
    title: 'adversarial_ml_ctf靶场攻击（明文）',
    primary: 'AI安全',
    secondary: 'CTF',
    date: '2026 // 06 / 19',
    url: 'posts/adversarial-ml-ctf-attack.html',
    excerpt: 'adversarial_ml_ctf靶场攻击教程，分析model.py和views.py源码，利用ResNet50对金鱼（ImageNet class 1）的识别特性，通过上传金鱼图片绕过similarity判断获取access granted。',
    tags: ['AI安全', 'CTF']
  },
  {
    title: 'adversarial_ml_ctf的PGD攻击实战',
    primary: 'AI安全',
    secondary: 'CTF',
    date: '2026 // 06 / 19',
    url: 'posts/adversarial-ml-ctf-pgd-attack.html',
    excerpt: '使用PGD（Projected Gradient Descent）迭代对抗攻击方法对ResNet50生成对抗样本，通过上传对抗性图片绕过adversarial_ml_ctf靶场的similarity检查。',
    tags: ['AI安全', 'CTF']
  },
  {
    title: 'Machine_Learning_CTF_Challenges 搭建',
    primary: 'AI安全',
    secondary: '靶场搭建',
    date: '2026 // 06 / 20',
    url: 'posts/ml-ctf-challenges-setup.html',
    excerpt: 'AI/ML CTF 挑战集合，涵盖模型攻击、LLM 和 AI Agent 利用。本文介绍 Dolos I & II 的 Docker 搭建方法。',
    tags: ['AI安全', '靶场搭建']
  },
  {
    title: 'Persuade_ML_CTF_Challenge — Pickle 反序列化',
    primary: 'AI安全',
    secondary: 'CTF',
    date: '2026 // 06 / 20',
    url: 'posts/persuade-ml-ctf-challenge.html',
    excerpt: 'PyTorch Pickle 反序列化漏洞 CTF 挑战，通过上传恶意 .pt 文件触发 pickle.loads() 实现任意代码执行。',
    tags: ['AI安全', 'CTF']
  },
  {
    title: 'Heist_ML_CTF_Challenge — 数据投毒攻击',
    primary: 'AI安全',
    secondary: 'CTF',
    date: '2026 // 06 / 22',
    url: 'posts/heist-ml-ctf-challenge.html',
    excerpt: 'ML CTF 挑战之数据投毒，利用 /train 路由接受用户上传 .zip 包含 .h5 数据集的漏洞，通过标签翻转/后门植入/噪声投毒策略攻击模型训练过程。',
    tags: ['AI安全', 'CTF']
  },
  {
    title: 'Fourtune_ML_CTF_Challenge — 对抗样本攻击',
    primary: 'AI安全',
    secondary: 'CTF',
    date: '2026 // 06 / 22',
    url: 'posts/fourtune-ml-ctf-challenge.html',
    excerpt: 'ML CTF 挑战之对抗样本攻击，Python 原生 HTTP 服务器部署 Keras MNIST 分类模型，上传对抗性图片使模型误判为数字 4 以获取 flag。',
    tags: ['AI安全', 'CTF']
  },
  {
    title: '揭秘 Windows 程序启动的神秘之旅',
    primary: '逆向',
    secondary: '基础',
    date: '2026 // 08 / 02',
    url: 'posts/windows-startup.html',
    excerpt: '深入剖析 Windows 程序从内核调度到用户 main() 的完整启动链路：ntdll.dll __RtlUserThreadStart → kernel32 BaseThreadInitThunk → mainCRTStartup → __scrt_common_main(_seh) → invoke_main，结合断点堆栈与反编译代码逐层讲解。',
    tags: ['逆向', 'C/C++', '调试', '底层原理', '学习笔记']
  },
  {
    title: '深入解析 C++ 虚函数与虚表机制',
    primary: 'C/C++',
    secondary: '基础',
    date: '2026 // 08 / 10',
    url: 'posts/cpp-vtable-virtual.html',
    excerpt: '通过 IDA 逆向一个含虚函数的 C++ 程序，深入解析虚函数与虚表机制：普通调用与虚函数调用的汇编差异、vptr 虚表指针的存放位置与赋值时机、为什么逆向时要为虚表新建 struct，以及 gcc Itanium ABI 虚表标准布局与 RTTI 类型信息。',
    tags: ['C/C++', '逆向', '底层原理', '学习笔记']
  },
  {
    title: '编译器优化：从加法指令到性能提升',
    primary: 'C/C++',
    secondary: '基础',
    date: '2026 // 08 / 18',
    url: 'posts/cpp-compiler-optimize.html',
    excerpt: '通过 MinGW / MSVC 多编译器对比分析 C++ 加法指令的汇编输出，详解 O1/O2 优化标志的差异，以及编译器在常量传播、常量折叠、复写传播三种优化策略下的具体表现，结合 IDA 反编译展示 argc 变量参与运算时编译器如何将可计算部分折叠为立即数。',
    tags: ['C/C++', '逆向', '底层原理', '学习笔记']
  }
];

const TAG_COLORS = {
  '逆向': '7b2d8e', '调试': '2ea44f', 'X64dbg': '00d4ff', 'Windbg': '3366ff',
  '学习笔记': 'ff6b35', 'C/C++': '3366ff', 'CSRF': 'e4405f', 'SQL注入': '8b5cf6',
  '验证码': 'f59e0b', '会话安全': 'f59e0b', 'CSP绕过': '8b5cf6', 'XSS': 'e4405f',
  'JS攻击': 'e4405f', '未授权访问': 'f59e0b', 'URL重定向': 'e4405f',
  '底层原理': 'ff6b35', 'Web安全': '3366ff', 'DVWA': '00d4ff', '命令注入': '2ea44f',
  '文件包含': 'ff6b35', '文件上传': 'ff6b35', '暴力破解': 'ff6b35', '靶场搭建': 'ff6b35',
  'CTF': 'e4405f', 'RSA': '8b5cf6', 'Crypto': '00d4ff', 'RC4': 'f59e0b',
  '蓝桥杯': 'ec4899', 'MD5碰撞': 'f59e0b', 'Java': 'e34f26',
  'MISC': 'f97316', 'Pwn': '10b981', 'PHP': '777bb3',
  '栈溢出': 'f97316', '安全工具': '00d4ff',
  'OWASP': 'e4405f', '供应链安全': 'ff6b35', 'CVE': 'e4405f', 'KaliLinux': '3366ff',
  'upload-labs': '10b981',
  'vulnhub': '10b981',
  '渗透测试': '3366ff',
  'AI安全': '00d4ff',
};

var PRIMARY_COLORS = {
  'Web安全': '3366ff',
  'CTF': 'e4405f',
  '逆向': '7b2d8e',
  'C/C++': 'f59e0b',
  'AI安全': '00d4ff'
};