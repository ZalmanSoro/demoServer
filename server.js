const express = require('express');

var app = express();

app.use((req,res,next)=>{
    console.log(req.method + req.url);
    next();
});
app.use((req,res,next)=>{
    res.sendFile(__dirname + '/views/loading.html')
    });

app.use(express.static(__dirname + '/public'));



app.get('/',(req,res)=>{
    res.send('<h1>Welcome to myServer</h1>');
});

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
app.listen(3000);