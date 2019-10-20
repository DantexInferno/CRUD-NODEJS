const {Pool}=require('pg')

const conexion=new Pool({
    user:'postgres',
    host:'localhost',
    password:'root',
    database:'corrientazodb',
    port:5432
})

conexion.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }else {
        console.log("conectado a la bd");
    }
});


module.exports=conexion;