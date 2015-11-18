var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();


// // // // //
var Bird = require('./birdsModel');

Bird.find({}, function (err, response) {
})

var newBird = new Bird({
    color: "green"
    //etc.
});

newBird.save(function(err, result){
    
})

// // // // //
app.use(bodyParser.json());
app.use(cors());

var db = mongojs('birds');
var sightings = db.collection('sightings');

app.get('/api/sighting', function (req, res, next) {
    sightings.find(req.query, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});


app.post('/api/sighting', function (req, res, next) {
    sightings.insert(req.body, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});


app.put('/api/sighting', function (req, res, next) {
    sightings.update({ "_id": mongojs.ObjectId(req.query.id) }, req.body, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});



app.delete('/api/sighting', function (req, res, next) {
    sightings.remove({ " _id": mongojs.ObjectId(req.query.id) }, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});



// listen to port
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
