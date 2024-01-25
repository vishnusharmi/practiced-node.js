const http = require("http");

const url = require("url");

const fs = require("fs");

const port = 3030;

http
  .createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    console.log(urlParse.query);
    // data gatting
    if (urlParse.pathname == "/file" && req.method == "GET") {
      fs.readFile("database.json", (err, data) => {
        if (data) {
          res.write(data);
          res.end();
        } else {
          res.write("no file no data please check");
          res.end();
        }
      });
      // file create and add data
    } else if (urlParse.pathname == "/create" && req.method == "POST") {
      fs.appendFile("createFile.txt", "file created text", (err, data) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("file created successFully");
          res.end();
        }
      });
      // file create or update content
    } else if (urlParse.pathname == "/update" && req.method == "PUT") {
      fs.writeFile("createFile.txt", "data update", (err, data) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("content update");
          res.end();
        }
      });
      // file delete
    } else if (urlParse.pathname == "/delete" && req.method == "DELETE") {
      fs.unlink("createFile.txt", (err, data) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("file deleted");
          res.end();
        }
      });
    } else {
      res.write("wrong credentials");
      res.end();
    }
  })
  .listen(port, () => {
    console.log("server running on 3030");
  });
