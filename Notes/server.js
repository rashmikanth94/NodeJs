var http = require('http');

http.createServer(
    (req, res)=>{
        res.writeHead(200, {"content-type": "text/plain"});
        res.write('hello everyone');
        res.end();
    }
).listen(4000)