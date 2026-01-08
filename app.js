sconst http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from AWS CodeDeploy 🚀 SUCCESS");
});

server.listen(80);
