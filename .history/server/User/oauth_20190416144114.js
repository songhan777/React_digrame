let express = require('express');
let api = express.Router();
api.get('/', function(req, res) {
    //console.log(req.query)
    res.send('ok')
})
api.get('/cb', function(req, res) {
    const code = req.query.code;
})
module.exports = api