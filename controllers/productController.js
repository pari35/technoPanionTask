const products = require('../model/products');

exports.createProducts = (async (req, res, next) => {

    const { productName, price, category } = req.body

    if (!productName || !price) {
        res.status(500).json({
            success: false,
            message: "please enter product name and price"
        })
    }
    const createProducts = await products.create({
        productName: productName,
        price: price,
        category: category
    })

    res.status(200).json({
        success: true,
        message: "Product Added successfully"
    })
})

exports.deleteProduct = (async (req, res, next) => {

    const deleteProd = await products.findByIdAndDelete({ _id: req.query.id })

    res.status(200).json({
        success: true,
        message: "Product Details Deleted successfully"
    })
})

exports.getProducts = (async (req, res, next) => {

    const getProd = await products.find({})

    if (!getProd) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    res.status(200).json({
        success: true,
       Products: getProd
    })
})

exports.getUpdateProducts = (async (req, res, next) => {
   
 const updateProd =   await products.findByIdAndUpdate({_id:req.query.id}, req.body)
 
 console.log("ssss",updateProd);
    res.status(200).json({
        success: true,
        updateProd
    })
})