const User = require('../model/userInvoice');

exports.userDetails = (async (req, res, next) => {

    const { country, ifsc, reference, debit, glDesc, text, advPaid, altPayee1, altPayee2, city, street, accNo } = req.body

    const createInvoice = await User.create({
        country: country,
        ifsc: ifsc,
        reference: reference,
        debit: debit,
        glDesc: glDesc,
        text: text,
        advPaid: advPaid,
        altPayee1: altPayee1,
        altPayee2: altPayee2,
        city: city,
        street: street,
        accNo: accNo
    })

    res.status(200).json({
        success: true,
        message: "Details Added successfully"
    })
})