/**
 * Created by zj_Li on 2018/10/9.
 */
//引入express模板
var express=require('express');
var app=express();
//设置模板引擎
var path = require('path');
//2,引入的ejs插件
var ejs = require('ejs');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
//5,静态文件
app.use(express.static('public'));
//6，引入body-parser模块
var bodyParser=require('body-parser');
//7,创建application/x-www-form-urlencoded
var urlencodedParser=bodyParser.urlencoded({extended:false})

var IndexCheckout=require('./checkout/IndexCheckout');
app.get('/index',IndexCheckout.index);

var LoginCheckout=require('./checkout/LoginCheckout');
app.get('/message',LoginCheckout.message);
app.post('/login',urlencodedParser,LoginCheckout.login);

//模板引擎
//app.get('/index',function (req,res) {
//
//    res.render('index',{});
//});
app.get('/checkout',function(req,res){
    res.render('checkout',{});
});
app.get('/login',function(req,res){
    res.render('login',{});
});
app.get('/product',function(req,res){
    res.render('product',{});
});
app.get('/register',function(req,res){
    res.render('register',{});
});
app.get('/single',function(req,res){
    res.render('single',{});
});
//路由
//app.get('/index',function(req,res){
//    res.sendFile(__dirname+"/views/"+"index.html");
//});
//app.get('/checkout',function(req,res){
//    res.sendFile(__dirname+"/views/"+"checkout.html");
//});
//app.get('/login',function(req,res){
//    res.sendFile(__dirname+"/views/"+"login.html");
//});
//app.get('/product',function(req,res){
//    res.sendFile(__dirname+"/views/"+"product.html");
//});
//app.get('/register',function(req,res){
//    res.sendFile(__dirname+"/views/"+"register.html");
//});
//app.get('/single',function(req,res){
//    res.sendFile(__dirname+"/views/"+"single.html");
//});
app.listen(3333,function() {
    console.log("启动");
});