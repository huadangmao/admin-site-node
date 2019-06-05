var express = require('express');
var app = express();


//解决跨域问题
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

//登录功能
var loginResult={
    errCode:0,
    msg:"登录成功"
}
app.post('/login', function (req, res) {
    res.status(200),
    res.json(loginResult);
})

//导航菜单
var menuResult={
    errCode:0,
    msg:"登录成功",
    data:[
        {
            id:1,
            title:"首页",
            icon:"icon-shouye",
            path:"/home",
            children:[]
        },
        {
            id:2,
            title:"我的E票",
            icon:"icon-qian",
            path:"/bill",
            children:[
                {
                    id:21,
                    title:"商转E",
                    path:"/changeBill",
                    children:[]
                },
                {
                    id:22,
                    title:"E票管理",
                    path:"/billManage",
                    children:[]
                },
                {
                    id:23,
                    title:"E票支付",
                    path:"/billPayment",
                    children:[]
                }
            ]
        },
        {
            id:3,
            title:"系统管理",
            icon:"icon-qian",
            path:"/system",
            children:[
                {
                    id:31,
                    title:"交易监控",
                    path:"/dealMonitor",
                    children:[]
                },
                {
                    id:32,
                    title:"支付协议",
                    path:"/paymentProtocol",
                    children:[]
                },
            ]
        }
    ]
}
app.get('/menu', function (req, res) {
    res.status(200),
    res.json(menuResult);
})


var viewDataResult={
    errCode:0,
    msg:"",
    data:{
        blockChainNum:1,
        peerNum:3,
        ChaincodeNum:129,
        BlockHeightNum:28162,
        UserNum:59,
        BlockTxNum:0
    }
}
app.get('/home/viewData', function (req, res) {
    res.status(200),
    res.json(viewDataResult);
})


var server = app.listen(3000);