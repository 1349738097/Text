/**
 * Created by zj_Li on 2018/10/9.
 */
//�ϴ����ݵ����ݿ��ж�ȡ���ݿ�����ݵ�ҳ����
exports.index=function(req,res){
    //1,������ҳ���ݴ���ģ��
    var IndexDao = require('../daoD/Login');
    //2����������
    var indexDao =  new IndexDao();
    //3,��ʼ��
    indexDao.init();
    //4,��ѯ����
    indexDao.selectProducts(function(result){

        res.render('index',{products:result})
    });
};
