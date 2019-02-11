let express = require('express');
let bodyParser = require('body-parser');
let {
    port,
    allow_cross_domain,
} = require('./config_server')
let {
    wFile
} = require('./Util');
let fs = require('fs');
let path = require('path');
let {promisify} = require('util');
let readFile = promisify(fs.readFile); //异步promise化
let writFile = promisify(fs.writeFile);
let stat = promisify(fs.stat);
let readdir = promisify(fs.readdir);
let unlink = promisify(fs.unlink);
let rmdir = promisify(fs.rmdir);
let publicPath  = path.resolve(__dirname,'./data');
let app = express();
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
app.post('/save', function (req, res) {
    wFile(`${publicPath}/${req.body.serialize.id}`, 'postion.json', JSON.stringify(req.body)).then(() => {
        console.log("保存成功")
        return readFile(`${publicPath}/task.json`)
    }).then((data) => {
        data = JSON.parse(data)
        const length = data.length
        let flg = true
        for (let i = 0; i < length; i++) {
            if (data[i].workFlowId == req.body.serialize.id) {
                data[i].name = req.body.name
                flg = false
                break
            }
        }
        if (flg) {
            let obj = {
                name: req.body.name,
                createTime: new Date(),
                startTiem: "2018-05-28T01:52:24.906Z",
                end: 0,
                className: "超人不会飞",
                classNum: 2,
                workFlowId: req.body.serialize.id,
                nodeId: "",
                "_id": req.body.serialize.id
            }
            data.push(obj)
        }

        return writFile(`${publicPath}/task.json`, JSON.stringify(data))
    }).then(() => {
        console.log("存入task成功")
        res.send({
            state: 1,
            msg: "保存成功",
            _id: req.body.serialize.id
        })
    })
})
app.post('/start', function (req, res) {
    readFile(`${publicPath}/${req.body.workFlowId}/postion.json`).then((data) => {
        data = JSON.parse(data)
        let obj = {}
        const postionlable = data.workSpace || data.serialize;
        const name = req.body.name
        //let obj = {}//定义一个空类，代表联通关系表信息
        obj.id = postionlable.id; //工作流ID
        obj.name = name; //工作流名字
        obj.nodes = []; //工作流所有的节点信息
        postionlable.nodes.forEach((item) => {
            //将ports先遍历在节点里
            let inputs = [];
            let outputs = [];
            item.ports.forEach((o, index) => {
                let nodePorts = {
                    id: o.id,
                    name: o.label
                };
                if (o.in) {
                    inputs.push(nodePorts);
                } else {
                    outputs.push(nodePorts);
                }
            });
            obj.nodes.push({
                name: item.name,
                id: item.id,
                inputs,
                outputs
            }); //每个节点先插入名字和ID,以及输入 输出的名字和ID
            // ports = ports.concat(item.ports);//将所有节点的输入输出 先统一存起来，后续通过连线来找连通关系
        });
        postionlable.links.forEach((item) => {
            obj.nodes.forEach((port) => {
                if (port.id == item.source) { //源节点
                    port.outputs.forEach((outport) => {
                        if (outport.id == item.sourcePort) {
                            if (outport.target == undefined) {
                                outport.target = [item.target];
                                outport.targetPort = [item.targetPort]
                            } else {
                                outport.target.push(item.target);
                                outport.targetPort.push(item.targetPort);
                            }
                        }
                    })
                } else if (port.id == item.target) { //目标节点
                    port.inputs.forEach((inport) => {
                        if (inport.id == item.targetPort) {
                            if (inport.source == undefined) {
                                inport.source = [item.source]
                                inport.sourcePort = [item.sourcePort];
                            } else {
                                inport.source.push(item.source);
                                inport.sourcePort.push(item.sourcePort);
                            }
                        }
                    })
                }
            })
        });
        let finalData = null //记录最终生成的数据
        let nodes = obj.nodes;
        nodes = nodes.sort((a, b) => {
            return a - b;
        });
        let nodesOrder = [];
        //遍历出第一层的node节点Id，然后存入nodesOrder里
        nodes.forEach((node, index) => {
            // 找出第一层的节点
            node.inputs.forEach((inval, index) => {
                if (inval.source == undefined) {
                    nodesOrder.push(node.id);
                } else { //如果输入存的不是本次电子流的节点，是上一个电子流的节点，做下面操作
                    inval.source.forEach((i, index) => {
                        let flg = false;
                        nodes.forEach((n, index) => {
                            if (i = n.id) {
                                flg = true;
                            }
                        });
                        if (!flg) {
                            nodesOrder.push(i); //将第一层节点 存起来
                        }
                    });
                }
            });

        })
        //let firstNode = [...nodesOrder];//保存第一层节点
        //函数 节点排序
        let cach = []; //存放那些source节点没有完全被排序到nodesOrder的节点
        let nodeSort = (length) => {
            let next = [];
            let newLength = nodesOrder.length;
            if (length == newLength) {
                return;
            }
            for (let i = length; i < nodesOrder.length; i++) {
                let nodeId = nodesOrder[i];
                nodes.forEach((node, index) => {
                    if (nodeId == node.id) { //之前存入的第一层节点
                        node.outputs.forEach((opt, index) => {
                            if (opt.target == undefined) { //没有目标节点，就是没有输出了，不用理会了
                            } else {
                                opt.target.forEach((i, index) => {
                                    next.push(i);
                                });
                            }
                        });
                    }
                })
            }
            //遍历next，查看他们的source里是否都在nodesOrder里，如果都在就把next中的Id插入nodesOrder中，证明是第二层，如果不都在，证明节点的输入还有其他节点，放在cach中等待！

            next.forEach((nodeId, index) => {
                nodes.forEach((node, index) => {
                    if (nodeId == node.id) {
                        let flg = false;
                        node.inputs.forEach((inv, index) => {
                            if (inv.source == undefined) { //

                            } else {
                                inv.source.forEach((i, index) => {
                                    if (nodesOrder.indexOf(i) == -1) {
                                        flg = true;
                                    }
                                });
                            }
                        })
                        if (flg) {
                            (cach.indexOf(nodeId) == -1) ? cach.push(nodeId): null;
                        } else {
                            (nodesOrder.indexOf(nodeId) == -1) ? nodesOrder.push(nodeId): null;
                        }
                    }
                })
            });
            //从当前新插入的Id开始在遍历target
            nodeSort(newLength);
        };
        nodeSort(0);

        let cachClean = (cach) => {
            if (cach.length == 0) {
                return;
            }
            for (let i = 0; i < cach.length; i++) {
                let item = cach[i];
                nodes.forEach((node, index) => {
                    if (item == node.id) {
                        let MaxIndex = [];
                        let flg = false;
                        node.inputs.forEach((inp, index) => {
                            inp.source.forEach((s, index) => {
                                let j = nodesOrder.indexOf(s);
                                if (j == -1) {
                                    //还有节点没遍历完
                                    flg = true;
                                } else {
                                    MaxIndex.push(j);
                                }
                            });
                        })
                        if (flg) { //代表还有source不在
                            let a = cach[i];
                            cach.splice(i, 1);
                            i--;
                            cach.push(a);
                        } else {
                            //判断source里的最后一位是哪个
                            let max = Math.max(...MaxIndex);
                            console.log(max);
                            //将当前节点插入到nodesOrder中、
                            if (nodesOrder.indexOf(node.id) == -1) {
                                nodesOrder.splice(max + 1, 0, node.id);
                            }
                            //将cach中删掉
                            cach = cach.filter((item, index) => {
                                return (item !== node.id)
                            })
                        }
                    }
                });
            }
            cachClean(cach);
        }
        cachClean(cach);

        let touchJson = (order, workFlowId) => {
            let JSONOBJ = {};

            JSONOBJ.macro = {}; //宏
            let wf = null;
            JSONOBJ.workflow = wf = {};
            order.forEach((id, index) => {
                nodes.forEach((node, index) => {
                    if (id == node.id) {
                        let val = null;
                        wf[node.name] = val = {}

                        node.inputs.forEach((inval, index) => {
                            // 为 pres 赋值
                            if (inval.source == undefined) {
                                val.pres = null;
                            } else { //如果输入存的不是本次电子流的节点，是上一个电子流的节点，做下面操作
                                inval.source.forEach((soi, index) => {
                                    let flg = false;
                                    nodes.forEach((n, index) => {
                                        if (soi == n.id) {
                                            flg = true;
                                            if (val.pres == undefined) {
                                                val.pres = [n.name];
                                            } else {
                                                if (val.pres.indexOf(n.name) == -1) { //判断当前pres里没有这个节点名字
                                                    val.pres.push(n.name);
                                                }

                                            }
                                        }
                                    });
                                    if (!flg) { //证明这个源节点不在本工作流，那么次工作流是一个复合工作流，他的源节点在上一个工作流中，去上一个工作流中寻找！

                                    }
                                });
                            }

                            //为input赋值
                            if (val.input == undefined) {
                                val.input = [inval.name];
                            } else {
                                val.input.push(inval.name);
                            }


                        });
                        // 为output 赋值
                        node.outputs.forEach((outval, index) => {
                            // 为output赋值
                            if (val.output == undefined) {
                                val.output = [outval.name]
                            } else {
                                val.output.push(outval.name);
                            }
                        })


                        if (data.config == null || data.config == undefined) {
                            val.command = '';
                        } else {
                            data.config.forEach((item, index) => {
                                if (item.id == node.id) {
                                    if (val.command == null || val.command == undefined) {
                                        val.command = {};
                                    }
                                    val.command.path = item.name;
                                    val.command.parameters = item.json.Parameter;
                                    console.log("-----------------------");
                                }
                            })
                        }
                        JSONOBJ.macro = data.macro
                    }
                });
            });
            wFile(`${publicPath}/${req.body.workFlowId}`, 'flow.json', JSON.stringify(JSONOBJ)).then(() => {
                res.send({
                    state: 1,
                    msg: "JSON生成完毕"
                })
            })
        }
        touchJson(nodesOrder, req.body.workFlowId)
    })



})
//获取工作流任务列表
app.get('/task', function (req, res) {
    readFile(`${publicPath}/task.json`).then((data) => {
        data = JSON.parse(data)
        res.send({
            state: 1,
            msg: data
        });
    }).catch((err) => {
        if (err.errno  == -4058 && err.syscall == 'open') {
            console.log(publicPath)
            wFile(publicPath,'task.json','[]')
            res.send({
                state: 1,
                msg: []
            });
        }
        res.send({
            state: 0,
            msg: err
        });
    })
});
//搜索
app.post('/serch', function (req, res) {
    let  ary = [];
    readFile(`${publicPath}/task.json`,'utf-8').then((data) => {
        data = JSON.parse(data)
        ary = data.map(item =>{
            let index = item.name.indexOf(req.body.name)
            if(index != -1) {
                return  item
            }
        })
        res.send({
            state: 1,
            msg: ary
        });
    }) 
})
//获取工作流详细内容，和新建工作流接口
app.post('/instance', function (req, res) {
    const ary = [{
        name: "生物信息学科",
        type: false
    }, {
        color: "rgb(0,192,255)",
        imgUrl: "",
        in: 0,
        inVal: [],
        name: "自定义可拖拽模块",
        out: 0,
        outVal: [],
        type: true
    }]
    //name:"111",id:"111",class:"传入"，新建工作流
    if (req.body.name == "111" && req.body.id == "111") { //新建工作流
        const obj = {
            components: ary,
            classNum: 2,
            workSpace: {}
        }
        res.send({
            state: 1,
            msg: obj
        })
    } else {
        let sendMsg = {};
        sendMsg.components = ary
        readFile(`${publicPath}/${req.body.workFlowId}/postion.json`).then((data) => {
            data = JSON.parse(data)
            sendMsg.config = data.config
            sendMsg.workSpace = data.serialize
            sendMsg.macro = data.macro
            sendMsg.classNum = 2
            res.send({
                state: 1,
                msg: sendMsg
            });
        })


    }
});
//删除工作流接口
app.post('/delete', function (req, res) {
    async function removeDepParell(p) { // 删除某个路径下的文件
        let statObj = await stat(p);
        if (statObj.isDirectory()) {
            let dirs = await readdir(p);
            // 把每个路径都包装成promise方法
            dirs = dirs.map(d => removeDepParell(path.join(p, d))); //[m/b,m/q,m/1.js]
            // Promise.all会让dirs中的每个promise都执行，都会删除掉自己，最后中的promise成功把父级删除掉即可
            await Promise.all(dirs); // 删除完儿子后 再删除自己 
            await rmdir(p);
        } else {
            await unlink(p);
        }
    }
    removeDepParell(`${publicPath}/${req.body.workFlowId}`).then(() => {
        return readFile(`${publicPath}/task.json`,'utf-8')
    }).then((data)=>{
        data = JSON.parse(data)
        let length = data.length
        for (let i = 0 ;i < length; i++) {
            if (data[i].workFlowId == req.body.workFlowId) {
                data[i] = data[length-1]
                break;
            } 
        }
        data.pop()
        return writFile(`${publicPath}/task.json`,JSON.stringify(data))
    }).then(() => {
        res.send({
            state: 1,
            msg: "删除成功"
        })
    }).catch((err) => {
        res.send({
            state: 0,
            msg: "删除错误:"+err
        })
    })
});
//更换标题
app.post('/changetitle', function (req, res) {
    readFile(`${publicPath}/${req.body._id}/postion.json`,'utf-8').then((data) => {
        data = JSON.parse(data)
        data.name = req.body.name
        return writFile(`${publicPath}/${req.body._id}/postion.json`,JSON.stringify(data))
    }).then(() => {
        return readFile(`${publicPath}/task.json`,'utf-8')
    }).then((data) => {
        data = JSON.parse(data)
        data.forEach(item => {
            if (item.workFlowId ==req.body._id) {
                item.name = req.body.name
            }
        })
        return writFile(`${publicPath}/task.json`,JSON.stringify(data))
    }).then(() => {
        res.send({
            state: 1,
            msg: "成功"
        });
    }).catch((err) => {
        res.send({
            state: 0,
            msg: "失败:"+err
        });
    })
});

app.get('/download', function (req, res) {
    //console.log(req);
    res.download(`${publicPath}/${req.query.id}/flow.json`)
})