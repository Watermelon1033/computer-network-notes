# Http Learning

- **Question**: 计算机网络书籍推荐?
  
  **Answer**: 如果想对网络有个清晰, 全面的认识, 可以阅读 3 本书籍.
    + 第一本: 潘爱民翻译的 Andrew S.Tanenbaum 的`《计算机网络》`,
      此书讲明白了网络之道, 即计算机网络通信的主要原理;
    + 第二本: W.Richard Stevens 的`《TCP/IP详解卷一：协议》`,
      此书讲明白了网络之术, 即 TCP/IP 协议簇的工作过程;
    + 第三本: Douglas E.Comer 的`《计算机网络与因特网》`,
      此书尝试在更广泛意义上解答 "计算机网络和因特网是如何工作的" 这一基本问题,
      解释了协议是如何使用硬件和应用是如何使用协议来满足用户的需求。
  
  作者：杨泽卫.
  
  链接: https://www.zhihu.com/question/19774914/answer/27088732



## Table Of Contents
1. 基本知识
    + 1.1 常见的 URL 组成部分分析
    + 1.2 TCP 和 UDP
    + 1.3 从 URL 在浏览器被被输入到页面展现的过程中发生了什么?
    + 1.4 一个 TCP 连接可以发多少个 HTTP 请求?
    + 1.5 简述 http2 / http1.0 / http1.1 的区别
2. DNS 解析过程
3. TCP-IP-协议分层



## New Words



## Content
### 1. 基本知识
##### 1.1 常见的 URL 组成部分分析
- 例如此链接: `http://www.joes-hardware.com/inventory-check.cgi?item=12731&color=blue`
    + `http:` -- 方案(scheme): 定义因特网服务的类型. 
      常见的协议有 `http`, `https`, `ftp`, `file`, 
      现在最常见的类型是 `https`, 即进行加密传输的网络传输.
    + `www.joes-hardware.com:80` -- 主机(host), (因特网)域名 和 端(port),
      此处端口省略. (`http`, `https` 的默认主机是 www).
    + `inventory-check.cgi` -- 路径(path): 定义服务器要请求信息的路径.
      (如果省略, 则文档必须位于网站的根目录中.)
    + `item=12731&color=blue` -- 查询(query)

##### 1.2 TCP 和 UDP
- `TCP`(Transmission Control Protocol) 传输控制协议
- `UDP`(User Data Protocol) 用户数据协议

##### 1.3 从 URL 在浏览器被被输入到页面展现的过程中发生了什么?

##### 1.4 一个 TCP 连接可以发多少个 HTTP 请求?
- 要搞懂这个问题, 我们需要先解决下面五个问题: 
    + 现代浏览器在与服务器建立了一个 TCP 连接后是否会在一个 HTTP 请求完成后断开?什么情况
      下会断开?
    + 一个 TCP 连接可以对应几个 HTTP 请求?
    + 一个 TCP 连接中 HTTP 请求发送可以一起发送么（比如一起发三个请求，再三个响应一起接收）?
    + 为什么有的时候刷新页面不需要重新建立 SSL 连接?
    + 浏览器对同一 Host 建立 TCP 连接到数量有没有限制?
- 待做笔记: https://zhuanlan.zhihu.com/p/80187784

##### 1.5 简述 http2 / http1.0 / http1.1 的区别
+  HTTP/0.9 
    - 只有一个命令 GET
    - 没有 HEADER 等描述数据的信息
    - 服务器发送完毕，就关闭 TCP 连接
+  HTTP/1.0
    - 增加了很多命令: 如 post/put 等
    - 增加 status code 和 header
    - 增加 多字符集支持、多部分发送、权限、缓存等
    - HTTP1.0 浏览器和服务器的链接过程是短暂的，每次连接只能处理一个请求和响应，客户端与
        web 服务器建立连接后，只能获得一个 web 资源。
+  HTTP/1.1
    - 支持持久连接
    - 增加 pipeline (管道化)
        + HTTP/1.1 允许多个 http 请求通过一个套接字同时被输出，而不用等待相应的响应。
            然后请求者等待各自的响应，这些响应式按照之前请求的顺序一次到达。
            [参考](https://jiaolonghuang.github.io/2015/08/16/http-pipelining/)
    - 增加 host 和其他一些命令
+  HTTP/2
    - 所有的数据以二进制传输
    - 同一个连接里面发送多个请求不再需要按照顺序
    - 头信息(Header)压缩以及推送等提高效率的功能


### 2. DNS 解析过程
- [DNS解析过程]('./DNS-解析/DNS-解析.md')


### 3. TCP-IP-协议分层
- [TCP-IP-协议分层]('./TCP-IP-协议分层/IP-Socket-UDP.md')