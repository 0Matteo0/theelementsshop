const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM clientes', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const { nombre, apellido, correo_electronico, contraseña, telefono} = req.body;

    let usuario = [ nombre, apellido, correo_electronico, contraseña, telefono];
  
    let nuevoUsuario = `INSERT INTO clientes(nombre, apellido, correo_electronico, contraseña, telefono) 
    VALUES(?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

 

module.exports = router;