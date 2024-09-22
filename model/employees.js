const mongoose = require('mongoose')

const employees = new mongoose.Schema({
    empName: {
        type: String,
        required: [true,"Please enter employee name"],
    },
    email_id: {
        type: String,
        required: [false],
    },
    salary: {
        type: Number,
        select: false,
    },

});

module.exports = mongoose.model("employees", employees);