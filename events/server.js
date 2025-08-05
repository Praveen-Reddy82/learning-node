let {createServer} = require("node:http");
const port = 3000;
let server= createServer();
server.on("request",function(request, res){
res.writeHead(200,{'Content-Type': 'text/html'});
res.end("<h1>This is my first http server in nodejs </h1>");
});

server.listen(port, ()=>{
  console.log(`Server runnning at 'http://localhost:${port}'`);
});


