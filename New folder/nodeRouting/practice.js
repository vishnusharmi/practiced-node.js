const http = require("http");
const url = require("url");
const port = 5055;

http
  .createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    if (urlParse.pathname === "/register" && req.method == "POST") {
      res.write("register successfully");
      res.end();
    } else if (urlParse.pathname == "/login" && req.method == "POST") {
      res.write("welcome Login successfully ");
      res.end();
    } else if (urlParse.pathname == "/data" && req.method == "GET") {
      res.write("backend DATA recieved");
      res.end();
    }
  })
  .listen(port, () => {
    console.log("server is running");
  });
