var Mongoose = require('mongoose');

var birdModel = Mongoose.Schema({
    color: String,
    region: String,
    firstStightingEver: Date,
    food: [String],
    foodDetails: [{
        name: String,
        type: { type: String },
        genus: String
    }],
    wingspan: Number,
    endangered: Boolean,
    nest: {
        materials: [String],
        size: Number,
        timeToBuild: Number,
        locationDescription: String
    }
})

module.exports = Mongoose.model('bird', birdModel)