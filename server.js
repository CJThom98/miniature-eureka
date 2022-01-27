const { db } = require('./data/db');
const express = require('express');
const app = express();

function filterByQuery(query, dbArray) {
    let filteredResults = dbArray;
    if (query.title) {
        filteredResults = filteredResults.filter(db = query.title === query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(db => query.text === query.text);
    }
    return filteredResults;
}

app.get('/api/db', (req, res) => {
    let results = db;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});