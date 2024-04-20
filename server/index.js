const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Tournaments')


const app = express()
app.use(cors())
app.use(express.json())

// Conneted the database to the server
mongoose.connect("mongodb://localhost:27017/Tennis")


// CRUD Operation

// Writing the api to create a new data enrty by using post http method
app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(Tournaments => res.json(Tournaments))
    .catch(err => res.json(err))
})

// Writing the api to read the data from the database by using get http method
app.get("/", (req, res) => {
    UserModel.find({})
    .then(Tournaments => res.json(Tournaments))
    .catch(err => res.json(err))
})

// Writing the api to update the data in the database by using get and put http method
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(Tournaments => res.json(Tournaments))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        TournamentID: req.body.TournamentID,
        TournamentName: req.body.TournamentName,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        SurfaceType: req.body.SurfaceType,
        VenueID: req.body.VenueID
    })
    .then(Tournaments => res.json(Tournaments))
    .catch(err => res.json(err))
})

// Writing the api to delete the data in the database
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})
