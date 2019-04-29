const request = require('request')
const express = require('express')
const api = express.Router();

api.get('/', function(req, res) {
    //console.log(req.query)
    res.send('ok')
})
api.get('/cb', function(req, res) {
    const code = req.query.code;
    request(`https://github.com/login/oauth/access_token?client_id=aeba3b94f917b3653e41&client_secret=17a018cc118b5c7a320ab49fda8891bacd99e581&code=${code}`, function (error, response, body) {
        console.log( typeof body)
        console.log(body.slice())
    })
})
module.exports = api