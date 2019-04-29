// 数据库连接
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wf');
let db = mongoose.connection;
let Schema = mongoose.Schema;

const userPropertyModel = mongoose.model('userProperty',  new Schema({
    _id: Schema.Types.ObjectId,
    group_id: Number,
    name: String,
    password: String,
    tel: String,//电话号码
    company: String,//公司单位
    type: String,
    scope: Number ,//用户权限
}));

const userActionModel = mongoose.model('userAction', new Schema({
    _id: Schema.Types.ObjectId,
    online: Boolean,// 是否在线
    last_login: Date,// 最近登录日期
    registered: Date,//注册日期
    duration: Number, // 在线时长
    duration_total: Number,// 在线总时长
})) 