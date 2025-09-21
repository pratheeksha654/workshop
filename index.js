const express=require('express');
const app=express();

app.get('/gree',(request,response)=>{
    response.send('Hello , World!');
})
app.listen(3002);