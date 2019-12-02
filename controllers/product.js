const Product = require("../models/product");

async function getProduct(req, res) {
    try {
        const product = await Product.findOne({ barcode: req.params.barcode });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error });
    }
}

async function createProduct(req, res) {
    try {
        const product = new Product(req.body);

        const validationError = await product.validate();
        if (validationError) {
            throw new Error(validationError);
        }
        await product.save();
        res.status(201).send({
            message: "Product has been successfully created"
        });
    } catch (error) {
        res.status(500).send({ error });
    }
}

module.exports = { getProduct, createProduct };
