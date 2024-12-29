const mongoose = require("mongoose");
const express = require("express");

const newSchema = mongoose.Schema({


your_name:{
    type:String,
    require:true
},
college_name:{
    type:String,
    require:true
},
year_of_study:{

  type:Number,
  require:true

},
graduation_year:{
    type:Number,
    require:true
},
any_placement:{

type:String,
require:true
}
})


const student = mongoose.model("student",newSchema);

module.exports = student;