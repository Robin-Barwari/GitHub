const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    orders: [{
        item_to_be_picked_up: {
            type: String,
            required: true,
            lowercase: true
        },
        warehouse: {
            type: String,
            required: true,
            lowercase: true
        },
        date: {
            type: Date,
            required: true
        }
    }]
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = {Orders};