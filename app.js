const express = require("express");
const app = express();

app.listen(65);

app.get("/",function(req,res) {
    res.send("A restaurant, Yong An Ly, 33808686");
})

app.get("/meals/calories/",function(req,res){
    console.log(req.query);
    const name = req.query.name;
    const count = parseInt(req.count);
    const isMeal = req.query.isMeal?  "meals" : "not meals"
    const calories = count*random(50,500);
    const result = isMeal? calories*2 : calories
    res.send(`The number of calories in ${count} ${name} ${isMeal} is ${result}`)
})

app.get("/menu",function(req,res){
    res.send()
})