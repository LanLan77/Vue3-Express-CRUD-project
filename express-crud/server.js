/* 

1. 导入express，body-parser，cors模块

其中:
* Express 用于构建 Rest api
* body-parser帮助解析请求并创建req.body对象
* cors用来解决跨域问题

2. 定义一个用于测试的 GET 路由
3. 在端口 3000 上监听请求 

*/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* 同步模型
定义好模型之后，我们就可以同步模型！

在server.js中，我们引入并使用刚才创建的sqeuilze */
const db = require("./app/models");
db.sequelize.sync().then(() => {
  console.log("创建数据库");
});


app.get("/", (req, res) => {
  res.json({ message: "课程管理系统" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

