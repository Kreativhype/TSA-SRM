const mysql = require('mysql');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Bling187!',
    database: 'Tsa_Database'
});

connection.connect(function(err) {
    if (err) throw err; 
    var sql = "DROP TABLE customers";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table deleted');
    });
});
