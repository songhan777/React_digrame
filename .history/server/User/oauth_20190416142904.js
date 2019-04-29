let express = require('express');
let api = express.Router();
api.get('/', function(req, res) {
console.log("oauth")
})
module.exports = api