/* 创建课程模型
我们已经可以正常的连接数据库了，那连接数据库之后，
我们是不是需要在testdb创建表！之前我们可能是需要编写sql脚本或者使用可视化工具创建表，添加字段。
不过Sequelizes可以通过定义模型，同步模型到数据库中，从而自动的在数据库中创建表以及字段。
也就是说Sequelizes的模型对应数据库中的表！

在Sequelizes中有两种定义数据模型的方式。
 * 调用 sequelize.define(modelName, attributes, options)
 * 扩展 Model 并调用 init(attributes, options)
这里我们使用define方式，defined是通过Sequlize实例来调用的。

我们定义了一个函数，这个函数接受sequelize,实例 Sequelize类两个参数，
然后在函数内部通过调用实例上define函数来创建一个Tutorial实例。 */

module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Tutorial;
  };
   