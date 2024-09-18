const express = require("express")
const app = express()
const cookieParser = require("cookie-parser");
const errorMiddleWare = require("./middleware/error.js")
const bodyParser = require('body-parser')

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/about', (req, resp) => {
  resp.send("welcome to home page")
})

// route imports
const user = require("./routes/userRoute.js");


app.use("/api/v1", user)

//error middleware

app.use(errorMiddleWare)
module.exports = app