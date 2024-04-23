/* 我们在app下，创建controller文件夹，并定义一个tutorial.controller.js 文件。
这个文件，主要定义我们所有的对model的操作。
既然是对model的操作，我们首先要引入db和Tutorial模型实例。 */
const db = require("../models");
const Tutorial = db.tutorials;


/* 下面我们定义一个create函数。在这个函数中，我们要做三件事。
1. 解析请求传递的数据
2. 将数据保存到数据库
3. 往前台返回操作的结果，也就是响应！
所以这个接口会接受两个参数，requset(请求体)和respnonse（响应体）。 */

exports.create = (req, res) => {

}


