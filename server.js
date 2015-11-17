var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
app.use(bodyParser());

var db = mongojs('birds');
var Bird = db.collection('sightings');











app.listen(3000, function () {
    console.log('Listening on port 3000');
});
