

const express = require("express");
const db = require("./db");

const design_data  = require("./schema");

const hotel_menu  = require("./menu_bar");
const student = require("./student");


const app = express();
const body = require("body-parser");
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.post("/student",async(req,res)=>{
try{


const data = req.body;
const newUser = new student(data);

const user = await newUser.save();
console.log(user);

res.json({"Hey Champ Your College Data Is Submitted":user});
}

catch(err){
    console.log("Erroe is occured",err);
    res.json("Error is Here",err);
}

})

app.get("/student",async(req,res)=>{
try{


const data = await student.find();

res.json(data);

}
catch(err){
    console.error("Hie From Error I am here",err);
    res.json("Hie",err);
}



})



app.post("/menu",async(req,res)=>{

    try{

        const data = req.body;
        const fill_data = new hotel_menu(data);

        const save = await fill_data.save();
        console.log(save);

        res.status(201).json({ message: "Successful add data Champ just relax",save });

        
    }
    catch(err){

console.log("error is occured",err)
res.status(500).json({ message: "Error occurred",err });
    }


})

app.get("/menu",async(req,res)=>{

try{

    const data = await hotel_menu.find();
    // console.log(data);
    res.json(data);


}
catch(err){
    console.error("error is occured",err);
    res.json("error",err);
}

})


app.get("/person/:worktype",async(req,res)=>{
    try{

        const worktype = req.params.worktype;
if(worktype=="Manager"||worktype=="Weter"||worktype=="sheph"){

    const response = await design_data.find({work:worktype});
    console.log("data is fetched");
    res.json(response);



}
else{
    console.log("I am not able to fetching the data in my database so sorry champ Good LUck !!!!!");
    res.json("error",err);
}
    }
    catch(err){

console.error("error occured champ ",err);
res.json("error",err);


    }

})


app.put("/person/:id",async(req,res)=>{


try{


    const personId = req.params.id;
    const updatData = req.body;

    const response = await design_data.findByIdAndUpdate(personId,updatData,{
        new:true,
        runValidators:true
    })

    res.json(response);


}
catch(err){
    console.error("Hie gb I am error i am also present in your jorney so plaese be with me !!!",err);
    res.json(err);
}

})


app.delete("/person/:id",async(req,res)=>{

try{


    const id = req.params.id;

    const remove = await design_data.findByIdAndDelete(id);


    console.log("data successfully deleted champ !!!!")
    res.json(remove);
}
catch(err){
    console.error("error",err);
    res.json(err);
}
})





app.get("/College",(req,res)=>{

console.log("The request is recieved");
return res.end("Hie champ Welcome In Backend Era");


})

app.get("/library",(req,res)=>{

const office ={

    book_name : "Electronic & Telecommunication Book",
    author:"guruprasad bhosale",
    location :"4th Floor",
    Permissions:"Yes There is One Piun Please take Permission while you enter In office"

}

res.send(office);

})


app.post("/person", async (req, res) => {
    try {
        const data = req.body; // Receive data from the request body
        const newUser = new design_data(data); // Create a new document using the schema

        const user = await newUser.save(); // Save the document to the database
        console.log(user); // Log the saved user to the console

        res.status(201).json({ message: "User saved successfully", user }); // Send response
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Failed to save user data" }); // Send error response
    }
});


app.get("/person",async(req,res)=>{
    try{

    
    const data = await design_data.find();
    res.json(data);
}
catch(err){
    console.log(err);
    res.json("error",err);
}
})


// (error,model)=>{
//     if(error){
//         console.log("Error is occured",error);
//     }else{
//         console.log("Successfully Added data")
//     }
// })
// newUser.name = data.name;
// newUser.age = data.age;
// newUser.mobile = data.mobile;
// newUser.email = data.email;
// newUser.address = data.address;
// newUser.salary = data.salary;






app.listen(8000,()=>{console.log("Server started to listen....!!!")});



// function practice(){

// const add = (a,b)=>a*b;

// console.log(add(10,12))


// function callback(a,b){

// console.log(a+b);

// }

// const os = require("os");
// const fs = require("fs");


// console.log(os.userInfo());

// fs.appendFile("Guru.txt","Hie Guruprasad You are Winner",()=>{
//     console.log("Hie champ");
// })

// function multiply(c,d,callback){

//     console.log(c*d);
//     callback(10,20);

// }

// multiply(10,20,function(a,b){

// console.log(a+b);
// });


// console.log(os)

// }
// module.exports = {practice};