/* 

1. 导入express，body-parser，cors模块

其中:
* Express 用于构建 Rest api
* body-parser帮助解析请求并创建req.body对象
* cors用来解决跨域问题

2. 定义一个用于测试的 GET 路由
3. 在端口 3000 上监听请求 

*/

const express = require('express')

const app = new express()

app.get('/',(req,res)=>{
     res.json({
        'message': "课程管理系统"
     })
})

app.listen(3000,()=>{
     console.log("项目已经成功运行,端口3000")
})