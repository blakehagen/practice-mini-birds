var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();

app.use(bodyParser.json());
app.use(cors());

var db = mongojs('birds');
var sightings = db.collection('sightings');

app.get('/api/sighting', function (req, res, next) {
    sightings.find(req.query, function (err, result) {
        if (err) res.sent(err);
        else res.json(result);
    })
});


app.post('/api/sighting', function (req, res, next) {
    sightings.insert(req.body, function (err, result) {
        if (err) res.sent(err);
        else res.json(result);
    })
});


app.put('/api/sighting', function (req, res, next) {
    sightings.update({ "_id": mongojs.ObjectId(req.query.id) }, req.body, function (err, result) {
        if (err) res.sent(err);
        else res.json(result);
    })
});



app.delete('/api/sighting', function (req, res, next) {
    sightings.remove({ " _id": mongojs.ObjectId(req.query.id) }, function (err, result) {
        if (err) res.sent(err);
        else res.json(result);
    })
});



// listen to port
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
