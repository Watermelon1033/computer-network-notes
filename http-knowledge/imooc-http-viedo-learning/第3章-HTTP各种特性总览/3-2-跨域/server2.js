const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) {
    // 这个 console 是在服务器端输出的也就是在后台看到的输出
    console.log("request come", request.url);

    const html = fs.readFileSync("test.html", "utf-8");
    response.writeHead(200, {
        // 允许跨域
        "Access-Control-Allow-Origin": "*"
    });

    // 这个请求的成功查看在: 浏览器控制台 --> Network --> 点击 127.0.0.1 后 -->
    // 右侧的 Response 中查看
    response.end("123");
}).listen(9603);

console.log("Server listening on 9603");