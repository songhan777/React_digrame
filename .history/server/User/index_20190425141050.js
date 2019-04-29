const express = require('express');
const api = express.Router();
const {userPropertyModel} = require('../Database')

const oAuth = require('./oauth')
api.use('/oauth', oAuth);

api.post('/', function (req, res) {  // 里面 有点会掉太多了，可以改写成promise
    const body = req.body
    userPropertyModel.find()
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
    console.log(':id来了来了  ')
    console.log(req.params.id)
    
})
api.put('/:id', function (req, res, next) {

    
})
api.delete('/:id', function (req, res) {

})


module.exports = api