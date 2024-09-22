const express = require("express")
const app = express()
const cookieParser = require("cookie-parser");
const errorMiddleWare = require("./middleware/error.js")
const bodyParser = require('body-parser')
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" })

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
const swaggerJSDoc = require("swagger-jsdoc");
app.get('/about', (req, resp) => {
  resp.send("welcome to home page")
})

const swaggerOption = {
  definition :{
    openapi :"3.0.0",
    info : {
      title : "sample API with swagger",
      version : "1.0.0",
      description :"swagger integration for products and employee API"
    },
    servers :[
      {
        url : `http://localhost:${process.env.PORT}/api/v1`
      }
    ]
  },
apis :["./routes/*.js"]

}

const swaggerSpec = swaggerJSDoc(swaggerOption)
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerSpec))
// route imports
const employee = require("./routes/employeeRoute.js");

const product = require("./routes/productRoute.js");


app.use("/api/v1", employee)
app.use("/api/v1", product)
//error middleware

app.use(errorMiddleWare)
module.exports = app