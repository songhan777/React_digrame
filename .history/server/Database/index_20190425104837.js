const { mongoose, Schema} = require('./config');

//用户
const userPropertyModel = mongoose.model('userProperty',  new Schema({
    _id: Schema.Types.ObjectId,
    group_id: Schema.Types.ObjectId,// 项目组ID
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

// 组
const groupPropertyModel = mongoose.model('groupProperty', new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    type: String,
    scope: Number,
    description: String,
}))
const groupActionModel = mongoose.model('groupAction', new Schema({
    user_count: Number,// 总用户数
    online_count: Number,// 在线用户数
}))

//会话
const sessionPropertyModel = mongoose.model('sessionProperty', new Schema({
    token: String,
    user_id: Schema.Types.ObjectId,
}))
const sessionActionModel = mongoose.model('sessionAction', new Schema({
    last_action: Date,// 最近动作日期
    login: Date, //创建日期
}))

module.exports = {
    userPropertyModel,
    userActionModel,
    groupPropertyModel,
    groupActionModel,
    sessionPropertyModel,
    sessionActionModel
}