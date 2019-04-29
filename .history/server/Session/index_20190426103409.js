const express = require('express');
const api = express.Router();
const { userPropertyModel, userActionModel, sessionModel} = require('../Database/index')

api.post('/', function(req, res) {
    const name = req.body.username
    const password = req.body.password
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(name)
    console.log(password)
    console.log(req.body)
    userPropertyModel.find({name}).exec().then((data) =>{
        console.log('%%%%%%%%%%%%%%')
        console.log(data)
        //return sessionModel.find({user_id:data._id})
    }).catch((err) =>{
        console.log('****************************')
        console.log(err)
    })
/*     const username = req.body.username
    const password = req.body.password */
    // 根据 用户名和密码，查数据库用户属性表
    // 获取用户ID，去会话模式表查询会话ID
    //修改会话状态，当前时间为更新为最近动作时间，
    //将会话ID和会话时间存入到session中
    req.session.token = '111abc'//临时值111abc
    req.session.userID = '123456789'
    req.session.lastAction = new Date()
    res.send({code:0,msg:'登录成功'})
    //res.send({code:1, msg:err})
})
api.get('/verify', function(req, res) {

    const interval = new Date() - new Date(req.session.lastAction)
    if (req.session.lastAction) {
        if(interval < 1000 *20) {//3分钟
            res.send({code:0,msg:'还在登录'})
        } else {
            res.send({code:1,msg:'登录超时'})
        }
        
    } else {
        res.send({code:1,msg:'未登录'})
    }
    
})
module.exports = api