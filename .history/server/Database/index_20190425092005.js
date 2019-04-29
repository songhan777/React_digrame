// 数据库连接
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wf");
let db = mongoose.connection;
let Schema = mongoose.Schema;

let userSchema = new Schema({
    id: Number,
    group_id: Number,
    name: String,
    password: String,
    tel: String,//电话号码
    company: String,//公司单位
    type: 
});
let userModel = mongoose.model("userProperty", userSchema);