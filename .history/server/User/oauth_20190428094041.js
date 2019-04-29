const request = require('request-promise')
const express = require('express')
let session = require('express-session');
const fs = require('fs')
const util = require('util')
const writFile = util.promisify(fs.writeFile);
const api = express.Router();

api.get('/cb', function(req, res) {
    const code = req.query.code;
    const opt = {
        uri: 'https://passport.escience.cn/oauth2/token',
        method: 'POST',
        form: {
            client_id: '96478',
            client_secret: 'iF2T3WZzu3o5QrAlCjVMkGIdyvCvuhzr',
            grant_type: 'authorization_code',
            redirect_uri:'http://flow.dv.ailab.win/user/oauth/cb',
            code:code,
        },
         headers: {
            'content-type': 'application/x-www-form-urlencoded' 
        },
        json: true  
    }


    request(opt).then((repos)=>{
        const token = repos.access_token
        console.log(repos)
        const body = req.body
        const userId = mongoose.Types.ObjectId()
/*         const proEntity = new userPropertyModel({
            _id: userId,
            group_id: mongoose.Types.ObjectId(),
            name: body.username,
            password: body.password,
            tel: body.tel,
            email: body.email,
            company: body.unit,
            type: null,
            scope: 777,
        })
        const actEntity = new userActionModel({
            _id: userId,
            online: false,
            last_loging: new Date(1970,1,1),
            registered: new Date(),
            duration: 0,
            duration_total:0,
        })
        const sessionEntity = new sessionModel({
            token:createTokenId(),
            user_id: userId,
            last_action: new Date(1970,1,1),
            login: new Date()
        })
        let pro = proEntity.save()
        let act = actEntity.save()
        let ses = sessionEntity.save()
        Promise.all([pro, act, ses]).then((data) =>{
            copyTableToSession(req, data[2])
            res.send({code: 0, msg: '注册成功'})
        }).catch((err) =>{
            res.send({code:1, msg: err})
        }) */


        req.session.token = '111abc'//临时值111abc
        req.session.userID = '123456789'
        req.session.lastAction = new Date()
        res.send({code:0,msg:'登录成功'})
    }).catch((err) =>{
        res.session.err = err
        res.send({code:1,msg:err})
        console.log("错误了")
        console.log(err)
    })/* .then((str)=>{
        //owner中信息 查询用户属性表，存在用户，通过ID查会话模式，修改会话状态，当前时间为最近动作时间
        //如果用户属性表中不存在用户，就插入
        // 将会话ID和会话时间存入到session
        req.session.token = '111abc'//临时值111abc
        req.session.userID = '123456789'
        req.session.lastAction = new Date()
        res.send({code:0,msg:'登录成功'})
    }) */

})
api.get('/', function (req, res) {
    
    //res.send({code: 1})
    //这块不能通过session  来判断，应该通过查询数据库判断是否时间还在
    if (req.session.token) {
        const interval = new Date() - new Date(req.session.last_action)
        res.send({code: 0})
    }else {
        res.send({code: 1})
    }
//console.log(req.session)
})

module.exports = api