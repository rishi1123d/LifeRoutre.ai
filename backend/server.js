const bestpath = require('./bestpath.js');

require('dotenv').config();
const apiKey = process.env.API_KEY;

const express = require('express');
const app = express();
const port = 3000;

app.length('/bestpath', (req, res) => {
    const origin = req.query.origin;
    const destination = req.query.destination;

    bestpath.getBestPath(apiKey, origin, destination)
        .then(route => {
            if (route) {
                res.json(route);
            } else {
                res.status(404).send('No routes found.');
            }
        })
        .catch(error => {
            res.status(500).send('Error:', error);
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});