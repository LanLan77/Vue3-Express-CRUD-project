/* 我们在app下，创建controller文件夹，并定义一个tutorial.controller.js 文件。
这个文件，主要定义我们所有的对model的操作。
既然是对model的操作，我们首先要引入db和Tutorial模型实例。 */
const db = require("../models");
const Tutorial = db.tutorials;


/* 下面我们定义一个create函数。在这个函数中，我们要做三件事。
1. 解析请求传递的数据
2. 将数据保存到数据库
3. 往前台返回操作的结果，也就是响应！
所以这个接口会接受两个参数，request(请求体)和response（响应体）。 */


/* 判断title是否存在
对于一个课程来说，title肯定是必须的，
所以我们最开始要先判断title是否存在。
直接判断req.body.title存不存在， */
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "课程名称不能为空"
        });
        return;
    }

    /* 解析数据
    创建临时变量存储数据 */
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published,
    };

    /* 保存数据，并响应
在Sequelize中，模型是 Sequelize 的本质. 模型是代表数据库中表的抽象. 
在 Sequelize 中,它是一个 Model 的扩展类。通过define定义的模型，会绑定很多方法。例如create方法。
通过模型调用create方法，可以不用写sql，保存数据。 */
    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "创建课程出错"
            });
        });

}
/* 这里我们使用Sequlize的findAll方法！findAll方法本质上就是数据库 select语句的封装！
在这个函数，我们干了两件事：
使用findAll方法查询。
使用send返回查询结果。 */

exports.findAll = (req, res) => {
    Tutorial.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "查询所有课程出错",
        });
      });
  };
  