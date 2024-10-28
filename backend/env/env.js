const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'b20bsgd3xa8w5hvv2y6o-mysql.services.clever-cloud.com',
    user: 'ud2h6ygezp8alt94',
    password: 'Uj7iBJpztkRbzIFXSjW8',
    database: 'b20bsgd3xa8w5hvv2y6o',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;