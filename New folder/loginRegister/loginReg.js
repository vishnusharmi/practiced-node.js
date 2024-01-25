let express = require("express");

let app = express();
let fs = require("fs");
let port = 4000;
app.use(express.json());

let registerData = [];
app.post("/register", (req, res) => {
  //   console.log(req.body);
  //   registerData.push(req.body);
  console.log(req.query);
  registerData.push(req.query);
  let regData = JSON.stringify(registerData);
  fs.writeFile("database.json", regData, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("register successfully");
    }
  });
});

app.get("/users", (req, res) => {
  fs.readFile("database.json", (err, data) => {
    if (data) {
      res.send(data);
    } else {
      res.send(err);
    }
  });
});

app.listen(port, () => {
  console.log("server is running");
});
