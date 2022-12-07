const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middleware

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

const port = 3001

const mysql = require('mysql')

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "nodejs-mysql"
}

const DB = mysql.createConnection(dbConfig)

app.listen(port, () => {
    console.log("Listening on port: ", port)

    DB.connect((error) => {
        if (error) {
            console.log("error", error)
        } else {
            console.log("connected!")
        }
    })
})

