let express = require('express');
let api = express.Router();

api.post('/', function(req, res) {
    const username = req.body.username
    const password = req.body.password
    // 根据 用户名和密码，查数据库用户属性表
    // 获取用户ID，去会话模式表查询会话ID
})

module.exports = api