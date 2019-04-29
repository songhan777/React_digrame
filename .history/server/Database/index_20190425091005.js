// 数据库连接
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wf");
let db = mongoose.connection;
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    password: String,
    organization: Number,
});
let userModel = mongoose.model("userInfo", userSchema);