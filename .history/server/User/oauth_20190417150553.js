const request = require('request-promise')
const express = require('express')
let session = require('express-session');
const fs = require('fs')
const util = require('util')
const writFile = util.promisify(fs.writeFile);
const api = express.Router();

/* let redirect_uri = null
if (process.env.NODE_ENV  == 'production') {
    redirect_uri = ''
} else {
    port = 3000;
    allow_cross_domain = 'http://localhost:8080';
} */
let state = null 
let gitOwner = null

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
        req.session.owId= str[0].owner.id
        state = true
        gitOwner = str[0].owner
        console.log("#############################￥￥￥￥￥￥￥￥")
        console.log(req.session.owId)
        res.send('ok')
        setTimeout(() => {
            console.log(req.session.owId)
        }, 12000);
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