let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let path = require('path');
let {promisify} = require('util');
let readFile = promisify(fs.readFile); //异步promise化
let app = express();
let port = null;
let allow_cross_domain = null;
if (process.env.NODE_ENV  == 'production') {
    port = 3333;
    allow_cross_domain = 'http://localhost:80'
} else {
    port = 3000;
    allow_cross_domain = 'http://localhost:8080';
}

app.listen(port, function () {
    console.log(`${port}端口启动成功`)
});
app.use(express.static( path.resolve(__dirname,'../dist')));

// bodyParser 的设置
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//设置跨域请求头1u
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", allow_cross_domain);
    res.header("Access-Control-Allow-Credentials", true); //设置跨域携带cookie
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    next();
});


app.use('/user', );
app.get('/list', function (req, res) {
    console.log('请求列表');
    readFile(path.resolve(__dirname, './project.json'), 'utf-8').then((data) => {
        console.log(data);
        res.send(data);
    })
});

app.post('/work', function (req, res) {
    console.log('获取工作');
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
        console.log(data);
        res.send(data);
    })
});
app.post('/recentlyWork', function (req, res) {
    console.log('过滤数据');
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
        console.log(data);
        res.send(data);
    })
});
app.get('/team', function (req, res) {
    console.log('获取队伍数据');
    readFile(path.resolve(__dirname, './team.json'), 'utf-8').then((data) => {
        console.log(data);
        res.send(data);
    })
});
app.post('/work/pushPersonal', function (req, res) {
    console.log('推送结果');
    console.log(res);
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/work/searchTeam', function (req, res) {
    console.log('搜索队伍的数据');
    readFile(path.resolve(__dirname, './teamSearch.json'), 'utf-8').then((data) => {
        console.log(data);
        res.send(data);
    })
});
app.post('/work/searchMember', function (req, res) {
    console.log('搜索合作者的数据');
    readFile(path.resolve(__dirname, './searchMember.json'), 'utf-8').then((data) => {
        console.log(data);
        res.send(data);
    })
});
app.post('/work/recentlyMember', function (req, res) {
    console.log('最近合作者。');
    readFile(path.resolve(__dirname, './searchMember.json'), 'utf-8').then((data) => {
        console.log(data);
        res.send(data);
    })
});

app.post('/work/pushTeam', function (req, res) {
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/work/pushMember', function (req, res) {
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/registeredUser', function (req, res) {
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/getValidation', function (req, res) {
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
        res.send("123456");
    })
});
app.post('/retrievePassword', function (req, res) {
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/checkoutValidation', function (req, res) {//校验验证码
    if (req.body === "111111") {
        res.send("1");
    } else {
        res.send("0");
    }
});
//数据集的上传
app.post('/getDataSet', function (req, res) {
    readFile(path.resolve(__dirname, './getDataSet.json'), 'utf-8').then((data) => {
        res.send(data);
    })
});
app.post('/getDataSetDatabase', function (req, res) {
    readFile(path.resolve(__dirname, './getDataSet.json'), 'utf-8').then((data) => {
        res.send(data);
    })
})
app.post('/uploadDataSet', function (req, res) {
    readFile(path.resolve(__dirname, './getDataSet.json'), 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/LocalUpload', function (req, res) {
    readFile(path.resolve(__dirname, './getDataSet.json'), 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/VerifyOldPassword', function (req, res) {
    readFile('./getDataSet.json', 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/nowPassword', function (req, res) {
    readFile('./getDataSet.json', 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});

app.post('/handleTeamList', function (req, res) {
    readFile('./getDataSet.json', 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/removeTeamList', function (req, res) {
    readFile('./getDataSet.json', 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/handleMemberList', function (req, res) {
    readFile('./getDataSet.json', 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/removeMemberList', function (req, res) {
    readFile('./getDataSet.json', 'utf-8').then(() => {
        res.send("1");
    }, () => {
        res.send("0");
    })
});
app.post('/getProjectData', function (req, res) {
    readFile(path.resolve(__dirname, './projectData.json'), 'utf-8').then((data) => {
        res.send(data);
    })
});
