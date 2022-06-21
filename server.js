const express = require("express") 
const app = express()  
const cors = require("cors") 
const PORT = 8000     


app.use(cors())

const rangers = {
    
    "jason":{
        "color": "red",
        "weapon":"sword", 
        "Zord": "T-Rex"
    },

    "billy":{
        "color": "blue",
        "weapon":"lance", 
        "Zord": "triceratops"
    }, 

    "trini":{
        "color": "yellow",
        "weapon":"daggers", 
        "Zord": "Sabertooth tiger"
    }, 

    "kimberly":{
        "color": "pink",
        "weapon":"bow", 
        "Zord": "Pterodactyl"
    }, 

    "zack":{
        "color": "Black",
        "weapon":"Axe", 
        "Zord": "Mastodon"
    },


}


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")

})

app.listen( process.env.PORT ||  PORT, ()=>{
    console.log(`this is listening on ${PORT} lets build`)
} )  

app.get("/api",(req,res)=>{
    res.json(rangers)
})


app.get("/api/:name",(req , res)=>{
    console.log(req.params.name)   
    const rangerNme = req.params.name
    if(rangers[rangerNme]){
        res.json(rangers[rangerNme])
    } 
    else {
        res.json(rangers["unknown"])
    }

})


app.get("/api/:weapon", (req, res)=>{
    console.log(req.param.weapon) 
    const wpn = req.params.weapon  
    if(rangers[wpn]){
        res.json(rangers[wpn].weapon)
    } 

})