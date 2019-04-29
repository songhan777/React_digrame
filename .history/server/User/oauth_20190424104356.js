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
        qs: {
            client_id: '96478',
            client_secret: 'iF2T3WZzu3o5QrAlCjVMkGIdyvCvuhzr',
            grant_type: code
        },
        headers: {
            'Accept': 'application/json'
        },
        json: true
    }
    request(opt).then((repos)=>{
        const token = repos.access_token
        console.log(repos)
/*         const options = {
            uri: 'https://api.github.com/user/repos',
            qs: {
                access_token: token
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        }
        return request(options) */
    }).catch((err) =>{
        //res.session.err = err
        //res.send({code:1,msg:err})
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


/*     if(state) {
        req.session.ssid = gitOwner.id
        res.send({code: 0})
    } else {
        res.send({code: 1})
    } 
 */
res.send({code: 0})
console.log(req.session)
})

module.exports = api