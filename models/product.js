const {Schema, model} = require("mongoose");

const productSchema = new Schema({
    barcode: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    weight: Number,
    amount: Number,
    capacity: Number  
});

module.exports = model("Product", productSchema);