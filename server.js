const path = require("path");
const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const productRouter = require("./routes/products");

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(cors());
app.use(express.json()).use("/products", productRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
