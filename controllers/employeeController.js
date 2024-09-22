const employee = require('../model/employees');

exports.createEmployee = (async (req, res, next) => {

    const { empName, email_id, salary } = req.body

    if (!empName || !email_id) {
        res.status(400).json({
            success: false,
            message: "please enter employee name and email"
        })
    }
    const createEmp = await employee.create({
        empName: empName,
        email_id: email_id,
        salary: salary
    })

    res.status(200).json({
        success: true,
        message: "Employee Details Added successfully"
    })
})

exports.deleteEmployee = (async (req, res, next) => {
   
    if (!req.query.id ) {
        res.status(400).json({
            success: false,
            message: "please enter Id"
        })
    }

    const deleteEmp = await employee.findByIdAndDelete({ _id: req.query.id })

    res.status(200).json({
        success: true,
        message: "Employee Deleted successfully"
    })
})

exports.getByName = (async (req, res, next) => {
    const { empName } = req.query


    if (!empName) {
        res.status(400).json({
            success: false,
            message: "Please enter employee name"
        })
    }
    const getEmp = await employee.find({ empName: empName })

    res.status(200).json({
        success: true,
        getEmp
    })
})


exports.getHighestSal = (async (req, res, next) => {
   
    const getEmp = await employee.find({}, { salary: 1 })
    
    let arr = []
    const getEmpArr = getEmp.map((e) => {
        arr.push(e.salary)
    }
    )
    let maxSal = Math.max(...arr)

    res.status(200).json({
        success: true,
        maxSalary: maxSal
    })
})