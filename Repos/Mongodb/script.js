const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

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