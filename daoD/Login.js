/**
 * Created by zj_Li on 2018/10/10.
 */
function Login(){
    this.init=function() {
        //引入mysql模块
        var mysql = require('mysql');//调用mysql模块
        //1，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',//主机ip
            user: 'root',//mysql认证用户名
            password: '123456',//mysql认证用户密码
            port: '3306',//端口号
            database: 'myprice'//数据库里面的数据
        });
        //2,连接
        this.connection.connect();
    }
    this.selectProducts=function(call){
        //1,编写sql语句
        var userGetSql='SELECT*FROM prices';
        //2,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userGetSql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });
//3,连接结束
        this.connection.end();
    }
}
module.exports=Login;