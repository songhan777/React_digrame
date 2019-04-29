const request = require('request-promise')
const express = require('express')
let session = require('express-session');
const fs = require('fs')
const util = require('util')
const writFile = util.promisify(fs.writeFile);
const api = express.Router();

api.get('/gitcb', function(req, res) {
    const code = req.query.code;
    const opt = {
        uri: 'https://github.com/login/oauth/access_token',
        qs: {
            client_id: 'aeba3b94f917b3653e41',
            client_secret: '17a018cc118b5c7a320ab49fda8891bacd99e581',
            code: code
        },
        headers: {
            'Accept': 'application/json'
        },
        json: true
    }
    request(opt).then((repos)=>{
        const token = repos.access_token
        const options = {
            uri: 'https://api.github.com/user/repos',
            qs: {
                access_token: token
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        }
        return request(options)
    }).then((str)=>{
        //owner中信息 查询用户属性表，存在用户，通过ID查会话模式，修改会话状态，当前时间为最近动作时间
        //如果用户属性表中不存在用户，就插入
        // 将会话ID和会话时间存入到session
        req.session.token = '111abc'//临时值111abc
        req.session.userID = '123456789'
        req.session.lasstAction = new Date()

        res.status(200)
    }).catch((err) =>{
        console.log("错误了")
        console.log(err)
    })

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