const mongoose = require('mongoose')

const invoiceUser = new mongoose.Schema({
    country: {
        type: String,
        required: [false],
    },
    ifsc: {
        type: String,
        required: [false],
    },
    reference: {
        type: String,
        required: [false],
    },
    debit: {
        type: String,
        required: [false],
    },
    glDesc: {
        type: String,
        required: [false],
    },
    text: {
        type: String,
        required: [false],
    },
    advPaid: {
        type: String,
        required: [true,"please enter advance paid"],
    },
    altPayee1: {
        type: String,
        required: [false],
    },
    altPayee2: {
        type: String,
        required: [false],
    },
    city: {
        type: String,
        required: [false],
    },
    street: {
        type: String,
        required: [false],
    },
    accNo: {
        type: Number,
        select: false,
    },

});

module.exports = mongoose.model("invoiceUser", invoiceUser);