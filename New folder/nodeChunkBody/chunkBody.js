const http = require("http");

const url = require("url");

const fs = require("fs");

const port = 3003;

http
  .createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    if (urlParse.pathname == "/posts" && req.method == "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        console.log(body);
        fs.writeFile("textFile.txt", body, (err) => {
          if (err) {
            console.log(err);
          } else {
            res.write("data added");
            res.end();
          }
        });
      });
    } else {
      res.write("it is error please check");
      res.end();
    }
  })
  .listen(port, () => {
    console.log("port running");
  });
