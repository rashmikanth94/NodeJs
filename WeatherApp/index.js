const express = require('express');
const request = require('request');

const app = express();
const port = 9000;

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=17.38&lon=78.48&appid=52184e83b46f4e6cdaff3d729f23365e';

app.listen(port, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(`server started succesfully on ${port}`);
    }

})

app.use(express.static(__dirname+"/public")) //css
app.set("views","./src/views")//pages
app.set("view engine", "ejs")

app.get("/", (req, res)=> {
    request(url, (err, response, body)=> {
        if(err){
            console.log(err);
        } else {
            output = JSON.parse(body);
            // res.send(JSON.parse(body));
            res.render("main", {output, title:'ew'});
        }
    })
    // res.send('Hey dudeeee');
})