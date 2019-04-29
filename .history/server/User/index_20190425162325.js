const express = require('express');
const api = express.Router();
const { userPropertyModel, userActionModel, sessionPropertyModel, sessionActionModel} = require('../Database')
const {mongoose} = require('../Database/config')

const oAuth = require('./oauth')
api.use('/oauth', oAuth);

api.post('/', function (req, res) {  // 里面 有点会掉太多了，可以改写成promise
    const body = req.body
    const userId = mongoose.Types.ObjectId()
    const proEntity = new userPropertyModel({
        _id: userId,
        group_id: mongoose.Types.ObjectId(),
        name: 'zhunan',
        password: body.password,
        tel: body.tel,
        email: body.email,
        company: body.unit,
        type: null,
        scope: 777,
    })
    const actEntity = new userActionModel({
        _id: userId,
        online: false,
        last_loging: new Date(1970,1,1),
        registered: new Date(),
        duration: 0,
        duration_total:0,
    })
    const sessionPropEntity = new sessionActionModel({
        token:
    })
    Entity.save(function (error, doc) {
    })
    userPropertyModel.find({name: 'zhunan'}, function (error, docs) {
        console.log(docs)
        console.log(error)
    })
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