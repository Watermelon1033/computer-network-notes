# Chapter2 —— URL与资源
> 目录 (Table of Content)
- 2.1 浏览因特网资源
- 2.2 URL 的语法 
- 2.3 URL 快捷方式
    + 2.3.1 相对 URL
    + 2.3.2 自动扩展 URL
- 2.4 各种令人头痛的字符
    + 2.4.1 URL 字符集
    + 2.4.2 编码机制
    + 2.4.3 字符限制
    + 2.4.4 另外一点说明
- 2.5 方案的世界
- 2.6 未来展望
- 2.7 更多信息


## 2.1 浏览因特网资源
- URL 是浏览器寻找信息时所需的资源位置。通过 URL 应用程序才能找到、使用并共享因特网上大量的
  数据资源。URL 是人们对 HTTP 和其他协议的常用访问方式，在浏览器中输入一个 URL, 浏览器就会
  发送适当的协议报文来获取所期望的资源。
- URI 是一类更通用的资源标识符，URL 实际上是它的一个子集。 URI 是一个通用的概念，由 2 个主
  要的子集 "URL" 和 "URN" 构成: 
    + URL 是通过描述资源的位置来标识资源的，
    + 而 URN 则是通过名字来识别资源的，与资源当前所处位置无关。  
- HTTP 规范将更通用的概念 URI 作为其资源标识符，但实际上，HTTP 应用程序处理的只是 URI 的
  URL 子集。本书有时会不加区分第使用 URI 和 URL，但我们讲的基本上都是 URL。比如这个 
  URL：`http://www.joes-hardware.com/seasonal/index-fall.html` 包含以下 3 部分:
    + (1) `http` 是 URL 方案 (scheme)。方案告诉 Web 客户端怎样访问资源。在这个例子中，
      URL 说明是使用 HTTP 协议。  
    + (2) `www.joes-hardware.com` 指的是服务器的位置。告知 Web 客户端资源位于何处。
    + (3) `/seasonal/index-fall.html` 是资源路径。路径说明了请求的是服务器上哪个特定
      的本地支援。
- 大多数 URL 方案的 URL 语法都建立在 9 个部分构成的通用格式上: <br/>
  `<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>` 
   几乎没有那个 URL 包含了所有这些组件。 URL 最重要的 3 个部分是： 方案（scheme）、
   主机（host）和 路径（path）。


## 2.2 URL 的语法
#### 2.2.1 方案(scheme)
- 方案实际上是规定如何访问指定资源的主要标识符，它会告诉负责解析 URL 的应用
  程序应该使用什么协议。在我们这个简单的 HTTP URL 中所使用的方案就是 http。
  方案组件必须以一个字母符号开始，由第一个“:”符号将其与 URL 的其余部分分
  隔开来。
  
#### 2.2.3 用户(user) 和 密码(password)
- 更有趣的组件是 user 和 password 组件。很多服务器都要求输入用户名和密码才会允许
  用户访问数据。FTP 服务器就是这样一个常见的实例。例如:
    + ``ftp://ftp.prep.ai.mit.edu/pub/gnu``
        - 上面没有用户或密码组件，只有标准的方案，主机和路径。
    + ``ftp://anonymous@ftp.prep.ai.mit.edu/pub/gnu``
    + ``ftp://anonymous:my_password@ftp.prep.ai.mit.edu/pub/gnu``
    + ``http://joe:joespassword@www.joes-hardware.com/sales_info.txt``
  
#### 2.2.2 主机(host) 和 端口(port)
- 要想在因特网上找到资源，应用程序要知道是哪台机器装载了资源，以及在哪台计算(host)
  的什么地方可以找到能对目标资源进行访问的服务器。URL 的主机和端口组件提供了这 2 组
  信息。
- 主机组件标识了 internet 上能够访问资源的宿主机器。比如下面这 2 个 URL 就指向同
  一个资源 —— 第一个 URL 是通过主机名，第二个通过 IP 地址指向服务器：
    + ``http://www.joes-hardware.com:80/index.html``
    + ``http://161.58.228.45:80/index.html``
- 端口组件标识了服务器正在监听的网络端口。对下层使用了 TCP 协议的 HTTP 来说，默认
  端口为**80**  
  
#### 2.2.4 路径(path)
- URL 的路径组件说明了资源位于服务器的什么地方。路径通常很想一个分级的文件系统路径。
  比如: `http://www.joes-hardware.com:80/seasonal/index-fall.html` 这个
  URL 中的路径为 `/seasonal/index-fall.html`，很像 UNIX 文件系统中的文件系统
  路径。路径是服务器定位资源时所需的信息。
  
#### 2.2.5 参数(params)
- 负责解析 URL 的应用程序需要这些协议参数来访问资源。为了向应用程序提供它们所需的输入
  参数，以便正确地与服务器进行交互，URL 中有一个参数组件。这个组件就是 URL 中的
  名值对列表，由字符“;”将其与 URL 的其余部分(以及各名值对)分隔开来。它们为应用程序
  提供了访问资源所需的所有附加信息。比如:
    + ``ftp://prep.ai.mit.edu/pub/gnu;type=d``
    + 在这个例子中，有一个参数 type=d，参数名为 type，值为 d.
- 如前所述，HTTP URL 的路径组件可以分成若干路径段。每段都可以有自己的参 数。比如:
    + `http://www.joes-hardware.com/hammers;sale=false/index.html;graphics=true`
    + 这个例子就有两个路径段，hammers 和 index.html。hammers 路径段有参数 sale，
      其值为 false。index.html 段有参数 graphics，其值为 true。  
      
#### 2.2.6 查询(query)
- 很多资源，比如数据库服务，都是可以通过提问题或进行查询来缩小所请求资源类型范围的。
- `http://www.joes-hardware.com/inventory-check.cgi?item=12731`
- 问号(?) 右边的这部分被称为查询(query)组件。URL 的查询组件和标识网关资源的 URL 路径组件
  一起被发送给网关资源。基本上可以将网关当作访问其他应用程序的访问点(第 8 章会对网关进行详
  细的讨论)。
- 按照常规，很多网关都希望查询字符串以一系列 “名/值” 对的形 式出现，名值对之间用字符 
  “&” 分隔: `http://www.joes-hardware.com/inventory-check.cgi?item=12731&color=blue`

#### 2.2.7 片段(frag):
- 有些资源类型，比如 HTML，除了资源级之外，还可以做进一步的划分。比如，对一个带有章节的大型
  文本文档来说，资源的 URL 会指向整个文本文档，但理想的情况是，能够指定资源中的那些章节。
- 为了引用部分资源或资源的一个片段，URL 支持使用片段(frag) 组件来表示一个资源内部的片段。
  比如，URL 可以指向 HTML 文档中一个特定的图片或小节。片段挂在 URL 的右手边，最前面有一个
  字符“#”。比如: 
- `http://www.joes-hardware.com/tools.html#drills`
- 在这个例子中，片段 drills 引用了 Joe 的五金商店 Web 服务器上页面 /tools.html 中的
  一个部分。这部分的名字叫做 drills。([drɪl] --n.钻，钻机)


## 2.3 URL 快捷方式
#### 2.3.1 相对 URL
#### 2.3.2 自动扩展 URL

## 2.4 各种令人头痛的字符
#### 2.4.1 URL 字符集
#### 2.4.2 编码机制
#### 2.4.3 字符限制
#### 2.4.4 另外一点说明


## 2.5 方案的世界


## 2.6 未来展望


## 2.7 更多信息