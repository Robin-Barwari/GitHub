const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        lowercas:true
    },
    total: {
        type: Number,
        required: true
    },
    in_stock: [{
        warehouse: {
            type: String,
            required: true,
            lowercase: true
        },
        amount: {
            type: Number,
            required: true
        },
    }],
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = {Items};