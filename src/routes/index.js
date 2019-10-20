const express= require('express');

const router= express.Router();
const conexion= require('../database');


router.get('/platos',(req,res) =>{
    conexion.query('SELECT * FROM platos',(err,rows)=>{
        if (!err) {
            res.status(200).json(rows);
        }else {
            console.log(err);
            
        }
    }) 
    
})

router.get('/platos/:id',(req,res) =>{
    const {id}=req.params;
    conexion.query('SELECT * FROM platos WHERE idplato = $1', [id],(err,rows)=>{
        if (!err) {
            res.json(rows);
        }else {
            console.log(err);
            
        }
    }) 
    
})

router.post('/platos',(req,res) =>{
    const {nombre,precio}=req.body;
    conexion.query('INSERT INTO platos(nombre,precio)VALUES($1,$2)', [nombre,precio],(err,rows)=>{
        if (!err) {
            res.json(rows);
        }else {
            console.log(err);
            
        }
    }) 
    
})

router.put('/platos/:id',(req,res) =>{
    const {id}=req.params;
    const {nombre,precio}=req.body;
    conexion.query('UPDATE platos SET nombre=$1, precio=$2 WHERE idplato=$3', [nombre,precio,id],(err,rows)=>{
        if (!err) {
            res.json(rows);
        }else {
            console.log(err);
            
        }
    }) 
    
})


router.delete('/platos/:id',(req,res) =>{
    const {id}=req.params;
    
    conexion.query('DELETE FROM platos WHERE idplato=$1', [id],(err,rows)=>{
        if (!err) {
            res.json(rows);
        }else {
            console.log(err);
            
        }
    }) 
    
})

module.exports = router;