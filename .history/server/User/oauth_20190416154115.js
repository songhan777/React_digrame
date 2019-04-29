const request = require('request-promise')
const express = require('express')
const api = express.Router();

/* let redirect_uri = null
if (process.env.NODE_ENV  == 'production') {
    redirect_uri = ''
} else {
    port = 3000;
    allow_cross_domain = 'http://localhost:8080';
} */

api.get('/', function(req, res) {
    //console.log(req.query)
    res.send('ok')
})
api.get('/cb', function(req, res) {
    const code = req.query.code;
    console.log(code)
    const opt = {
        
    }
    request(`https://github.com/login/oauth/access_token?client_id=aeba3b94f917b3653e41&client_secret=17a018cc118b5c7a320ab49fda8891bacd99e581&code=${code}`).then((str)=>{
        const token = str.slice(13)
        const options = {
            uri: 'https://api.github.com/user',
            qs: {
                access_token: token
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        }
        console.log("走到这了！！！！！！！")
        return request(options)
    }).then((str)=>{
        console.log("没报错，但是没有值")
        console.log(str)
    }).catch((err) =>{
        console.log("报错了")
        console.log(err)
    })
/*     function (error, response, body) {
        const token = body.slice(13);
        request(`https://api.github.com/user?access_token=${token}`, function (error, response, body) {
            console.log(body)
        })
    } */

})
module.exports = api