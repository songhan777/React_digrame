let express = require('express');
let api = express.Router();
api.get('/', function(req, res) {
    console.log(req.query)
})
module.exports = api