const { db } = require('./data/db');
const express = require('express');
const PORT = process.env.PORT || 3001;
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

function findById(id, dbArray) {
    const result = dbArray.filter(db => db.id === id)[0];
    return result;
}

app.get('/api/db', (req, res) => {
    let results = db;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('/api/db/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result); 
    } else {
        res.send(404);
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});