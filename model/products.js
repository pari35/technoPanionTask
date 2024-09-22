const mongoose = require('mongoose')

const productsTech = new mongoose.Schema({
    productName: {
        type: String,
        required: [true,"Please enter employee name"],
    },
    category: {
        type: String,
        required: [false],
    },
    price: {
        type: Number,
        select: true,
    }
});

module.exports = mongoose.model("productsTech", productsTech);