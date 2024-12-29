const mongoose = require("mongoose");

const design = new mongoose.Schema({

name:{
    type:String,
    require:true
},
age:{
    type:String,

},
work:{
    type:String,
    enum:[Manager,Weter,sheph],
    require:true
},
mobile:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
address:{
    type:String,
    
},
salary:{
    type:Number,
}


})
