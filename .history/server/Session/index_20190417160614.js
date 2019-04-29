let express = require('express');
let api = express.Router();

api.post('/', function(req, res) {
    const username = req.body.username
    const password = req.body.password
    // 根据 用户名和密码，查数据库
})

module.exports = api