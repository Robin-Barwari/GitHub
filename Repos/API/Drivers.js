const mongoose = require("mongoose");

const driversSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    available: {
        type: String,
        required: true,
        lowercase: true
    },
    schedule: [{
        type: String,
        required: true,
        lowercase: true
    }],
});

const Drivers = mongoose.model("Drivers", driversSchema);

module.exports = {Drivers};