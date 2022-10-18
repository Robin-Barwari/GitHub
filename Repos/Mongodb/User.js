//Recives mongoose library
const mongoose = require("mongoose")

//Saving the data of user (Schema = type of structure)
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestfriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    adress: {
        street: String,
        city: String 
    },
})
// function takes in our model of schema
module.exports = mongoose.model("User", userSchema)