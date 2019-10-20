const express= require('express');
const app= express();
const morgan= require("morgan");

//settings
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);
//middlewres
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'))
//starting server
app.listen(3001, ()=>{
    console.log(`servidor en puerto ${app.get('port')}`);
    
})