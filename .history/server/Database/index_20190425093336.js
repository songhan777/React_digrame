// 数据库连接
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wf');
let db = mongoose.connection;
let Schema = mongoose.Schema;

const userPropertyModel = mongoose.model('userProperty',  new Schema({
    id: Number,
    group_id: Number,
    name: String,
    password: String,
    tel: String,//电话号码
    company: String,//公司单位
    type: String,
    scope: Number ,//用户权限
}));

const userActionModel = mongoose.model('userAction', new Schema({
    online: Boolean,
    last_login: Date
})) 