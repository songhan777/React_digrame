let express = require('express');
let api = express.Router();

api.post('/', function(req, res) {
    console.log('登录成功')
    const username = req.body.username
    const password = req.body.password
    // 根据 用户名和密码，查数据库用户属性表
    // 获取用户ID，去会话模式表查询会话ID
    //修改会话状态，当前时间为更新为最近动作时间，
    //将会话ID和会话时间存入到session中
    req.session.token = '111abc'//临时值111abc
    req.session.userID = '123456789'
    req.session.lastAction = new Date()
    console.log(req.session)
    console.log(1212121212)
    res.send({code:0,msg:'登录成功'})
    //res.send({code:1, msg:err})
})

module.exports = api