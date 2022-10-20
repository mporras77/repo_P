const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'locallhost',
  user: 'Nombre',
  password: 'Clave',
  database: 'repositorio2',
  port: 'repo'
});

mysqlConnection.connect( err => {
  if(err){
    console.log('Error en db: ', err);
    return;
  }else{
    console.log('Db ok');
  }
});

module.exports = mysqlConnection;