const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile); //异步promise化
const userComponent = require('./User/index.js')//引用用户组件
const sessionComponent = require('./Session/index')//应用会话组件
const app = express();

//设置允许跨域
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
//设置跨域请求头1u
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", allow_cross_domain)
    res.header("Access-Control-Allow-Credentials", true); //设置跨域携带cookie
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    next();
});
app.use(session({//设置session
    secret: "workflow",
    resave: true,
    name: 'workflow',
    saveUninitialized: true,
}));

app.use(express.static( path.resolve(__dirname,'../dist')));

// bodyParser 的设置，结构post请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
const ingnoreBaseUrl = [/\/getValidation/,/\/checkoutValidation/,/\/registeredUser/,/\/session/,/\/user\/oauth[\/]*\w*/]
app.use('*',function (req, res, next) {
    let bol = null;
    for (let i = 0 ;i < ingnoreBaseUrl.length; i++){
        let bol = ingnoreBaseUrl[i].test(req.baseUrl)
        if(ingnoreBaseUrl[i].test(req.baseUrl)){
            bol = true
            break;
        } 
    }
    if(bol) {
        next();
    } else {
        const interval = new Date() - new Date(req.session.lastAction)
        if (req.session.lastAction) {
            if(interval < 1000 * 60 *3) {//3分钟
                req.session.lastAction = new Date()
                next()
            } else {
                res.send({offline:'登录超时'})
            }
            
        } else {
            res.send({offline:'登录超时'})
        }
    }

})


app.use('/user', userComponent)
app.use('/session', sessionComponent)
 
/* app.use('/',function(req, res, next) {
    if (req.session.token !== undefined) {
        const interval = new Date() - new Date(req.session.lastAction)
        if (req.session.token && interval < 1000*60 && !req.session.err) {
            req.session.lastAction = new Date();
            next();
        } 
        res.send({offline: true})
    }
    res.send({offline:true})
}) */



app.get('/list', function (req, res) {
    console.log('请求列表');
    req.session.znId = 111
    readFile(path.resolve(__dirname, './project.json'), 'utf-8').then((data) => {
       // console.log(data);
        res.send(data);
    })
});

app.post('/work', function (req, res) {
    console.log('获取工作');
  
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
       // console.log(data);
        res.send(data);
    })
});
app.post('/recentlyWork', function (req, res) {
    console.log('过滤数据');
    readFile(path.resolve(__dirname, './workList.json'), 'utf-8').then((data) => {
        //console.log(data);
        res.send(data);
    })
});
app.get('/team', function (req, res) {
    console.log('获取队伍数据');
    console.log(req.session)
    readFile(path.resolve(__dirname, './team.json'), 'utf-8').then((data) => {
        //console.log(data);
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
        //console.log(data);
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
       // console.log(data);
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

app.get('*',  function (req, res) {
    console.log('返回index.html')
  let pat = path.resolve(__dirname, '../dist/')
  let optins = {
    root: pat,
    dotfilesa: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('index.html',optins, function (err) {
    if(err) res.status(500)
  })

})
