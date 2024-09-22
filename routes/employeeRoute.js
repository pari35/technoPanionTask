const express = require("express");
const { createEmployee ,deleteEmployee,getByName, getHighestSal} = require("../controllers/employeeController");
const router = express.Router()


/**
 * @swagger
 * /createEmployee:
 *   post:
 *     summary: Create a new employee
 *     tags:
 *       - employee
 *     description: Create a new employee including employee name, salary, and email id.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               empName:
 *                 type: string
 *               email_id:
 *                 type: string
 *               salary:
 *                 type: number
 *     responses:
 *       200:
 *         description: Employee details added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Employee details added successfully
 */


router.route("/createEmployee").post(createEmployee)

/**
 * @swagger
 * /deleteEmployee/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags:
 *       - employee
 *     description: Delete an employee by specifying its ID in the URL path.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the employee to delete
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Employee deleted successfully
 */

router.route("/deleteEmployee").delete(deleteEmployee)

/**
 * @swagger
 * /getEmployee:
 *   get:
 *     summary: Get all employee details by name
 *     tags:
 *       - employee
 *     description: Retrieve details of an employee.
 *     responses:
 *       200:
 *         description: Employee details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   empName:
 *                     type: string
 */


router.route("/getEmployee").get(getByName)

/**
 * @swagger
 * /getHighest:
 *   get:
 *     summary: Get the highest salary of an employee
 *     tags:
 *       - employee
 *     description: Retrieve the highest salary of an employee.
 *     responses:
 *       200:
 *         description: Highest salary retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   salary:
 *                     type: number
 */


router.route("/getHighest").get(getHighestSal)

module.exports = router