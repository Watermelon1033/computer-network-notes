## 第3章 HTTP 各种特性总览

### 3-1 认识 HTTP 客户端
 - 把 Git Bash 当作一个 http 客户端
    + 在 git bash 中输入: curl baidu.com 此时输出结果指向 www.baidu.com
    + git bash 中输入: curl www.baidu.com 看到完整的网页返回
    + git bash 中输入: curl -v www.baidu.com 详细的展示请求和返回的信息


### 3-2 CORS 跨域请求的限制与解决
- 方案1: 在被请求的服务器文件(server2.js )中设置 "Access-Control-Allow-Origin": "*"
- 方案2: 使用 JSONP (全程 JSON with Padding, 用于解决 AJAX 跨域问题i的一种方案)
    + 由于同源策略的限制，浏览器只允许 XMLHttpRequest 请求当前源(域名、协议、端口)的资源，
       而对请求 script 资源没有限制。通过请求 script 标签实现跨域请求，然后再服务端输出
       JSON数据并执行回调函数，这种跨域的数据的方式被称为 JSONP
     + JSONP 的注意事项:
        - JSONP 只支持 GET 请求而不支持 POST 等其他类型的 HTTP 请求。
        - JSONP 再调用失败的时候不会返回各种 HTTP 状态吗 (解决方法: 添加 timeout 参数，
         虽然 JSONP 请求本身的错误没有被捕获，但是最终会因为超时而执行 error 回调。)
        - 在使用JSONP的时候必须要保证使用的JSONP服务必须是安全可信的。万一提供
         JSONP的服务存在页面注入漏洞，它返回的javascript都将被执行，若被注入这是非常危险的。


### 3-3 CORS 跨域限制以及预请求验证


### 3-4 缓存头 Cache-Control 的含义和使用
- http协议中的"缓存"(cache-control): Web 的缓存机制。缓存是通过对常用文档进行本地复制来提高性能、减少流量的设备。
    + 有什么特性呢？
        - 1、可缓存性
            + public: 共享的缓存被称为公有缓存（public cache）。公有缓存中包含了某个
                用户团体的常用页面（参见图 7-7b）。--《http权威指南》
            + private: 专用缓存被称为私有缓存（private cache）。私有缓存是个人的缓存，
                包含了单个用户最常用的页面（参见图 7-7a）。--《http权威指南》
            + no-cache
        - 2、什么时候到期?
            + max-age = <seconds>
            + s-maxage = <seconds> 再代理服务器中才会生效
            + max-stale = <seconds> 
        - 3、重新验证
            + must-revalidate
            + proxy-revalidate
            

### 3-5 缓存验证 Last-Modified 和 Etag 的使用


### 3-6 cookie 和 session


### 3-7 HTTP 长连接


### 3-8 数据协商


### 3-9 Redirect


### 3-10 CSP (内容安全策略 content-security-policy)