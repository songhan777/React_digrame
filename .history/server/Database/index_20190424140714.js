// 数据库连接
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/workflow");
let db = mongoose.connection;
let Schema = mongoose.Schema;