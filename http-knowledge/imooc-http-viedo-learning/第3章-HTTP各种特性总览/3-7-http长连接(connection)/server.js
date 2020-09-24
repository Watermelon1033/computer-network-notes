const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);

    const html = fs.readFileSync('test.html', 'utf8');
    const img = fs.readFileSync('test.jpg');
    // 注意: if 和 else 都会执行
    // if 执行的是默认请求
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        });
        response.end(html)
    }
    // else 执行是上面的 if 走完后页面被加加载到浏览器中，然后 img 开始请求 src
    else {
        response.writeHead(200, {
            'Content-Type': 'image/jpg',
            // 设置长连接
            'Connection': 'keep-alive' // or close
        });
        // 此服务器把上面读取的服务器中的 img 图片返回给 img 的 src (注: 默认
        // 情况下静态页面和图片都是一起打包到服务器的，这种奇怪的写法应该不会用到。
        // 此处可能只是做展示。)
        response.end(img)
    }

}).listen(8888);

console.log('server listening on 8888');