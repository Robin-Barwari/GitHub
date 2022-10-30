const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        lowercase: true
    },
    occupied: {
        type: String,
        required: true,
        lowercase: true
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {Employee};