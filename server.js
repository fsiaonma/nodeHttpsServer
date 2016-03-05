var http = require('https');
var https = require('https');
var fs = require('fs');

var express = require('express'),
app = express();
app.use(express.static(__dirname + '/public'));

var options = {
	pfx: fs.readFileSync('./keys/server.pfx'),
	passphrase: '123456'
};

https.createServer(options,function(req,res){
	res.writeHead(200);
	res.send({
		a: 1,
		b: 2,
		c: 3
	});
}).listen(3000,'127.0.0.1');

http.createServer(app).listen(80);