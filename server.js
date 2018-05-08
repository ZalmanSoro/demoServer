const express = require('express');

const port = process.env.PORT || 3000;
var app = express();

app.use((req,res,next)=>{
    console.log(req.method + req.url);
    next();
});





app.get('/',(req,res)=>{

    res.render('./index.html');
});
app.get('/sasy',(req,res)=>{

    res.send('<h1>Sasy the king</h1>');
})

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'error ocurred',
        data:{
            first:'zalman',
            last:'soro'
        }
    }
    )
})
app.listen(port ,()=>{
    console.log('Listening on port '+ port);
});