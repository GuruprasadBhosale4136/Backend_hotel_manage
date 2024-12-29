// this file responisble for crating connection to the database

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/college_management";

mongoose.connect("mongodb://127.0.0.1:27017");


// for connecting 
const db = mongoose.connection;

db.on("connected",()=>{

console.log("The connection is established");

})

db.on("disconnected",()=>{

    console.log("The connection is established");
    
    })

db.on("error",()=>{

        console.log("The connection is established");
        
        })

        module.exports = db;