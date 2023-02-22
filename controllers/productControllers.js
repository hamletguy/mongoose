const { model, models } = require("mongoose");
const productModel = require("../models/product");
// Add one product
// Creating a single document

const addOneProduct = async () => {
  const product = await new productModel({
    name: "Kabbous",
    price: 7000,
    description: "kabbous 7lw ",
    qts: 2000,
    category: ["homme", "headwear "],
    image: "https://ileycom.com/wp-content/uploads/2021/12/Chechia.jpg",
  });
  //   Saving the product to the DB
  product.save(function (err) {
    if (err) return handleError(err);
    console.log("Saved");
  });
};
// Adding mmultiple products
const addMultipleProducts = async () => {
  try {
    await productModel.insertMany([
      {
        name: "Barnous",
        price: 7000,
        description: "Barnous 7lw ",
        qts: 2000,
        category: ["homme", "Outfit"],
        image:
          "https://i.etsystatic.com/21697506/r/il/fb05d6/4214856668/il_1140xN.4214856668_263m.jpg",
      },
      {
        name: "Jebba",
        price: 20000,
        description: "Jebba  7lwa ",
        qts: 2000,
        category: ["homme", "Outfit"],
        image:
          "https://i.etsystatic.com/16387334/r/il/71fce5/2924428335/il_794xN.2924428335_4lyk.jpg",
      },
    ]);
    console.log("Saved the product");
  } catch (e) {
    console.log(e.message);
  }
};
// Get All products
const getAllProducts = async () => {
  try {
    const allProducts = await productModel.find();
    console.log({ length: allProducts.length, products: allProducts });
  } catch (error) {
    console.log(error.message);
  }
};
// Get one product
const getOneProduct = async () => {
  try {
    const product = await productModel.findById("63f498b6eaf4c8e06f285a0e");
    // const product = await productModel
    //   .find({
    //     category: "Outfit",
    //   })
    //   .select("-description")

    //   .sort({ name: "asc", price: -1 });
    console.log(product);
  } catch (e) {
    console.log(e.message);
  }
};
// updating a product
const updateProduct = async () => {
  try {
    const newProduct = await productModel.findByIdAndUpdate(
      "63f498b6eaf4c8e06f285a0e",
      { name: "test2" },
      { new: true }
    );
    console.log(newProduct);
  } catch (error) {
    console.log(error.message);
  }
};
// Find By id and delete
const deleteProduct = async () => {
  try {
    const deleted = await productModel.findByIdAndDelete(
      "63f498b6eaf4c8e06f285a0e"
    );
    console.log(deleted);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  deleteProduct,
  getOneProduct,
  getAllProducts,
  addOneProduct,
  addMultipleProducts,
  updateProduct,
};
