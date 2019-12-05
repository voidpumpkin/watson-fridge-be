const { Schema, model } = require("mongoose");

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
  amount: Number,
  measurement: {
    type: String,
    enum: ["qnt.", "g.", "ml."],
    required: true
  }
});

module.exports = model("Product", productSchema);
