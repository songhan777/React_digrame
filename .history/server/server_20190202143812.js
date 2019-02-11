let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let path = require('path');
let { promisify } = require('util');
let readFile = promisify(fs.readFile); //异步promise化
let writFile = promisify(fs.writeFile);
let stat = promisify(fs.stat);
let readdir = promisify(fs.readdir);
let unlink = promisify(fs.unlink);
let rmdir = promisify(fs.rmdir);
let publicPath  = path.resolve(__dirname,'./data');
let app = express();
let port = 3000;
let allow_cross_domain = 'localhost:8080';
app.listen(port, function () {
    console.log(`${port}端口启动成功`)
});
app.use(express.static('./dist'));

// bodyParser 的设置
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//设置跨域请求头1
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", allow_cross_domain);
    res.header("Access-Control-Allow-Credentials", true); //设置跨域携带cookie
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

app.get('/list',function(req, res){
    console.log('sdfsdfsdf')
    readFile(publicPath./project.json','utf-8').then((data) => {
        console.log(data)
        res.send(data);
    })
})