require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const blogRoutes = require('./routes/blog')

const path = require("path")
//const logger = require("morgan")
const cors = require("cors")



//express app
const app = express()

//middleware
app.use(express.json())
// app.use(logger("dev"))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: ["https://mern-stack-api-bice.vercel.app"],
    method: ["POST", "GET"],
    credentials: true
}))
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the application'})
})
app.use('/api/workouts', workoutRoutes)
app.use('/api/blog', blogRoutes)

mongoose.connect('mongodb+srv://patoBiden:patoBiden@cluster0.hf4wu.mongodb.net/?retryWrites=true&w=majority');


// app.use(express.static(path.join(__dirname, "./frontend/build")))

// app.get("*", function (_, res) {
//     res.sendFile(
//         path.join(__dirname, "./frontend/build/index.html"),
//         function (err) {
//             if (err) {
//                 res.status(500).send(err)
//             }
//         }
//     )
// })

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listen for request
        app.listen(process.env.PORT, () => {
            // console.log('listening on port 4000v', process.env.PORT)
            console.log('listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })

    module.exports = app