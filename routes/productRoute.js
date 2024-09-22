const express = require("express");
const { createProducts, deleteProduct, getProducts, getUpdateProducts } = require("../controllers/productController");
const router = express.Router()

/**
 * @swagger
 * /createProduct:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - product
 *     description: Create a new product including product name, category, and price.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product added successfully
 */


router.route("/createProduct").post(createProducts)

/**
 * @swagger
 * /deleteProduct/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags:
 *       - product
 *     description: Delete a product by specifying its ID in the URL path.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product deleted successfully
 */


router.route("/deleteProduct").delete(deleteProduct)

/**
 * @swagger
 * /getProducts:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - product
 *     description: Retrieve details of all products.
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   category:
 *                     type: string
 *                   price:
 *                     type: number
 *                 example:
 *                   id: 1
 *                   name: "Sample Product"
 *                   category: "Electronics"
 *                   price: 99.99
 */

router.route("/getProducts").get(getProducts)

/**
 * @swagger
 * /getUpdateProducts/{id}:
 *   put:
 *     summary: Update a particular product
 *     tags:
 *       - product
 *     description: Update product details including name, price, and category.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: number
 *             example:
 *               name: "Updated Product"
 *               category: "Electronics"
 *               price: 149.99
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product updated successfully
 */

router.route("/getUpdateProducts").put(getUpdateProducts)

module.exports = router