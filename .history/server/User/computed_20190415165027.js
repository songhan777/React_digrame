let express = require('express');
let api = express.Router();
api.post('/', function (req, res) {  // 里面 有点会掉太多了，可以改写成promise
    req.session
});
api.get('/new', function (req, res) {})

module.exports = api