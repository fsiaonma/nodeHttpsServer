var http = require('http');
var https = require('https');
var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

// 设置路由
app.use(require('./router')());

app.get("/", function(req, res) {
	res.send("111");
});

// 创建 https 服务器
var httpsServer = https.createServer({
	pfx: fs.readFileSync('./keys/server.pfx'),
	passphrase: '123456'
}, app);
httpsServer.listen(443, function() {
	console.log("http server listen: 433");
});

// 创建 http 服务器
var httpServer = http.createServer(app);
httpServer.listen(80, function() {
	console.log("http server listen: 80");
});