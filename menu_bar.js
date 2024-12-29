const mongoose = require("mongoose");

const schema = mongoose.Schema({


dish_name:{
    type:String,
    require:true
},
price:{
    type:Number,
    require:true
},

isdrink:{
    type:String,
    require:true
}

})

const hotel_menu = mongoose.model("hotel_menu",schema);

module.exports = hotel_menu;