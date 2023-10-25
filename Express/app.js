const express = require('express');
const fs = require('fs');
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello');
})


app.get('/getDetailss', (req, res)=> {
    fs.readFile('./../Files/temp.json', (error, result)=> {
        if(error){
            console.log(error);
        } else {
            res.send(JSON.parse(result));
        }
    })
})
app.listen(3000, ()=>{
    console.log('App started running ')
});