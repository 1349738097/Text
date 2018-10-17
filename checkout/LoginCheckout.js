/**
 * Created by zj_Li on 2018/10/9.
 */
//上传数据到数据库中读取数据库的数据到页面中
//将数据暴漏在外面
exports.login=function(req,res){
    var emailAddress=req.body.emailAddress;
    var passWord=req.body.passWord;

    //1,引入首页数据处理模块
    var LoginDao = require('../daoD/LoginDao');
    //2，创建对象
    var loginDao = new LoginDao();
    //3,初始化
    loginDao.init();
    //4,查询数据
    loginDao.selectPassword(function(result){
        var response={
            state:0,
            msg:''
        }
        var length=result.length;
        if(length==0){
            response.state=-1;
            response.msg="没有当前用户名，请注册用户名！";
        }else{
            var buffer=result[0].passWord;
            if(passWord==buffer){
                response.state=1;
                response.msg="登录成功！";
            }else{
                response.state=2;
                response.msg="输入密码错误！";
            }
        }
        //把对象转为json格式数据
        var data=JSON.stringify(response);
        res.end(data);
    },emailAddress);
};
exports.message=function(req,res){
    res.render('message',{})
}