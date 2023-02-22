const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  description: String,
  qts: { type: Number, required: true },
  category: [String],
  image: String,
  createdDate: { type: Date, default: Date.now },
});

module.exports = productModel = mongoose.model("product", productSchema);
