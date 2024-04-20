const mongoose = require('mongoose')
// const { VARCHAR, DATE, VAR_STRING, STRING } = require('mysql/lib/protocol/constants/types')

const UserSchema = new mongoose.Schema({
    TournamentID: Number,
    TournamentName: String,
    StartDate: String,
    EndDate: String,
    SurfaceType: String,
    VenueID: Number
}) 

const UserModel = mongoose.model("Tournaments", UserSchema)
module.exports = UserModel 