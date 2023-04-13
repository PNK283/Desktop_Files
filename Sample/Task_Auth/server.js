const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://NareshKumar:<NareshKumar>@cluster0.0l0hryk.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => console.log("DB connected successfully")
);

app.listen(5000, () => {
    console.log('Server running sucessfully.....')
})