let express = require('express');
let api = express.Router();

api.post('/', function(req, res) {
    const username = req.body.username
    const password = req.body.password
})

module.exports = api