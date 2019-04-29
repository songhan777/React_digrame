let express = require('express');
let api = express.Router();

api.post('/', function(req, res) {
    console.log(req.body)
})

module.exports = api