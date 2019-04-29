let express = require('express');
let api = express.Router();
api.post('/', function (req, res) {  // 里面 有点会掉太多了，可以改写成promise
    req.session
});
api.get('/new', function (req, res) {

})
api.get('/:id/status', function (req, res) {

})
api.get('/:id', function (req, res, next) {

    
})
api.put('/:id', function (req, res, next) {

    
})
api.delete('/:id', function (req, res) {
    
})


module.exports = api