const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const PORT = process.env.PORT || 5000;

var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'mainRoom'
});

app.use('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == 'OPTIONS') {
    res.send(200); 
  }
  else {
    next();
  }
});

app.post("/addQuestion", (req, res) => {
  pool.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query("insert into question values(\"" + req.query.name + "\",\"" + req.query.title + "\",\"" + req.query.content + "\", \"" + req.query.contact + "\", " + parseFloat(req.query.positionx) + ", " + parseFloat(req.query.positiony) + ",0);", function(err, rows) {
          if (err) throw  err;
          connection.release();
          res.send("success");
          res.end();
      });
  });
})

app.get("/getQuestions", (req, res) => {
  pool.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query("select title, content, positionx, positiony, likes from question;", function(err, rows) {
          if (err) throw  err;
          connection.release();
          res.send(rows);
          res.end();
      });
  });
});

app.post("/uploadImage", (req, res) => {
   pool.getConnection(function(err, connection) {
      if (err) throw err;
      var imgBinary = req.query.imgBinary;
      connection.query("insert into question values(\"" + req.query.name + "\",\"" + req.query.title + "\",\"" + req.query.content + "\", \"" + req.query.contact + "\", " + parseFloat(req.query.positionx) + ", " + parseFloat(req.query.positiony) + ",0);", function(err, rows) {
          if (err) throw  err;
          connection.release();
          res.send("success");
          res.end();
      });
  });
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});