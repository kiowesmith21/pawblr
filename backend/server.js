require('dotenv').config() //import dotenv 

const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts') //get the post routes

//create express app
const app = express()

//middleware
app.use(express.json()) //needed for sending data to server

app.use((req, res, next) => { //have to invoke next function
    console.log(req.path, req.method) //log the route path and the method (GET,POST, etc)
    next()
})

//routes, gets all of the routes from the router
app.use('/api/posts', postRoutes) //set the route path prefix 

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //start listening for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

