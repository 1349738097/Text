/**
 * Created by zj_Li on 2018/10/9.
 */
//上传数据到数据库中读取数据库的数据到页面中
exports.index=function(req,res){
    //1,引入首页数据处理模块
    var IndexDao = require('../daoD/Login');
    //2，创建对象
    var indexDao =  new IndexDao();
    //3,初始化
    indexDao.init();
    //4,查询数据
    indexDao.selectProducts(function(result){

        res.render('index',{products:result})
    });
};
