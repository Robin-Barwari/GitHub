const mongoose = require("mongoose")
const User = require("./User")
const express = require("express")

const server = express();

server.listen(3030, () => {
    console.log("Server up and running at http://localhost:3030");
    mongoose.connect("mongodb://localhost/testdb");
});

server.use(express.json());

server.post("/workers", (req, res) => {
    res.body.name
    res.json( {} );
})

run()
async function run(){
    try{
        const user = await User.create({
            name: "Robin",
            age: 28,
            email: "something@gmail.com",
            hobbies: ["Games", "Sports"],
            adress: {
                street: "Drottning gatan",
            },
        })
        console.log(user)
    }catch (e){
        console.log(e.message)
    }
    
}