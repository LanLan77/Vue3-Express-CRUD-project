/* 
配置mysql

在VScode中打开项目，然后再根目录下创建app文件夹，
并在app文件夹下新建db.config.js文件，
开始编写数据库的配置文件！我们单独将配置文件抽出来，可以有效的解耦，
如果我们想配置多个数据库，那么只要编写一个通用的Sequlizes实例，
就可以来连接多个数据库 */

module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "root",
    DB: "testdb",
    dialect: "mysql",
  };
