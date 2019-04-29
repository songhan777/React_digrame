const express = require('express');
const api = express.Router();
const { userPropertyModel, userActionModel, sessionModel} = require('../Database/index')
const { copyTableToSession, loginNoTimeOut } = require('../utils')

api.post('/', function(req, res) {
    const name = req.body.username
    const password = req.body.password
    userPropertyModel.find({name:name,password}).then((data) =>{
        if (data.length === 1) {// 没有做修改userprop的online操作，考虑是否启用定时任务

            return sessionModel.findOneAndUpdate({user_id:data[0]._id},{$set:{last_action: new Date()}},{new: true})
        } else {
            return []
        }
    }).then((data) =>{
        console.log(data)
        if (data.token ) {
            copyTableToSession(req, data)
            console.log(req.session)
           // res.send({code: 0, msg: '注册成功'})
            res.send({code:0, msg: '登录成功'})
        } else {
            res.send({code:1, msg:'数据库没找到对应会话'})
        }
    }).catch((err) =>{
        res.send({code:1, msg:err})
    })
})
api.get('/verify', function(req, res) {
    const interval = new Date() - new Date(req.session.last_action)
    const noTimeout = loginNoTimeOut(interval) //返回true 就是
    if (req.session.last_action) {
        if(noTimeout) {//3分钟
            res.send({code:0,msg:'还在登录'})
        } else {
            res.send({code:1,msg:'登录超时'})
        }
    } else {
        res.send({code:1,msg:'未登录'})
    }
})
module.exports = api