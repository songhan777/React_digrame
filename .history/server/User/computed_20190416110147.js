let express = require('express');
let api = express.Router();
api.get('/*', function (req, res) {  // 里面 有点会掉太多了，可以改写成promise
    console.log("我天呢")
    res.send('ok')
    req.session
});
api.get('/new', function (req, res) {
    console.log(121212121)
    res.send('ok')
})
api.get('/:id/status', function (req, res) {

})
api.get('/:id/session', function (req, res) {

})
api.get('/:id/data', function (req, res) {

})
api.get('/:id/workflow', function (req, res) {

})
api.get('/:id/library', function (req, res) {

})
api.get('/:id/task', function (req, res) {

})
api.get('/:id', function (req, res, next) {

    
})
api.put('/:id', function (req, res, next) {

    
})
api.delete('/:id', function (req, res) {

})


module.exports = api