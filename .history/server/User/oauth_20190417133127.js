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

api.get('/', function (req, res) {
    //console.log(req.session)
    console.log("???????????????????????????????")
    console.log(req.session)
    if(!req.session.number) req.session.number  = 0 
    req.session.number + 1 
/*     if(req.session.id) {
        res.send({code: 0})
    } else {
        res.send({code: 1})
    } */

})
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
        console.log("token ===================")
        console.log(token)
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
        //console.log(str)
        const owner = str[0].owner
       // console.log(owner)

        req.session.sdid = owner.id
        console.log(owner.id)
        
        //
    }).catch((err) =>{
        console.log("错误了")
        console.log(err)
    })

})

module.exports = api