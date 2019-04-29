const express = require('express');
const api = express.Router();
const { userPropertyModel, userActionModel, sessionModel } = require('../Database')
const {mongoose} = require('../Database/config')
const { createTokenId, copyTableToSession } = require('../utils')
const oAuth = require('./oauth')
api.use('/oauth', oAuth);

api.post('/', function (req, res) {  // 没做最初判断是否重复，如果有人恶意发接口信息，会导致数据库存入无用的信息，而且还会污染用户数据
    const body = req.body
    const userId = mongoose.Types.ObjectId()
    const proEntity = new userPropertyModel({
        _id: userId,
        group_id: mongoose.Types.ObjectId(),
        name: body.username,
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
    const sessionEntity = new sessionModel({
        token:createTokenId(),
        user_id: userId,
        last_action: new Date(1970,1,1),
        login: new Date()
    })
    let pro = proEntity.save()
    let act = actEntity.save()
    let ses = sessionEntity.save()
    Promise.all([pro, act, ses]).then((data) =>{
        copyTableToSession(req, data[2])
        res.send({code: 0, msg: '注册成功'})
    }).catch((err) =>{
        res.send({code:1, msg: err})
    })
});
api.post('/verify', function(req, res) {

})
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