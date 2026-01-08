const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from AWS CodeDeploy 🚀");
});

server.listen(80);
