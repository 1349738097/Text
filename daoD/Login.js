/**
 * Created by zj_Li on 2018/10/10.
 */
function Login(){
    this.init=function() {
        //����mysqlģ��
        var mysql = require('mysql');//����mysqlģ��
        //1������һ��connection
        this.connection = mysql.createConnection({
            host: 'localhost',//����ip
            user: 'root',//mysql��֤�û���
            password: '123456',//mysql��֤�û�����
            port: '3306',//�˿ں�
            database: 'myprice'//���ݿ����������
        });
        //2,����
        this.connection.connect();
    }
    this.selectProducts=function(call){
        //1,��дsql���
        var userGetSql='SELECT*FROM prices';
        //2,���в�ѯ����
        /**
         *query��mysql���ִ�еķ���
         * 1��userAddSql��д��sql���
         * 2��function (err, result)���ص�������err��ִ�д���ʱ���ش�һ��errֵ����ִ�гɹ�ʱ������result
         */
        this.connection.query(userGetSql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });
//3,���ӽ���
        this.connection.end();
    }
}
module.exports=Login;