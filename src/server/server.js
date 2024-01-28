var path = require('path');
const express = require('express');
const postGeonames = require('./postGeonames.js');
const postWeatherBit = require('./postWeatherBit');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.post('/weather', async (req, res) => {
    try {
        const geoData = await postGeonames(process.env.API_KEY_GEONAMES, req.body.destination);
        const weatherData = await postWeatherBit(process.env.API_KEY_WEATHERBIT, geoData.lng, geoData.lat, req.body.diffDays);
        const response = {geoData, weatherData};
        res.send(response);
    } catch (error) {
        console.error(error);
    }
});
