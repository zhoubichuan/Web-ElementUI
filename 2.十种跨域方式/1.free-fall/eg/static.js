/* 一个静态服务器 */

const http = require("http");
const fs = require("fs");
const app = http.createServer();
app.on("request", (req, res) => {
  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data.toString());
    }
    res.end();
  });
});
app.listen("4000", () => {
  console.log("已经连接4000端口");
});
