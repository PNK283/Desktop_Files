const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDb = async() => {
       mongoose.connect("mongodb://localhost:27017/test");
       const productsSchema = new mongoose.Schema({});
       const products = mongoose.model("Data",productsSchema);
       const data = await products.find();
       console.warn(data);

}

connectDb();

app.listen(5000);