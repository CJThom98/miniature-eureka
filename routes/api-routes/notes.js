const router = require('express').Router();
const fs = require('fs');
let notes = require('../../data/notes.json');

router.get('/notes', (req, res) => {
    notes = require('../../data/notes.json');
        res.json(notes);
});

router.post('/notes', (req, res) => {
    const pushNote = req.body;
    pushNote.id = uuidv4();
    notes.push(pushNote);
    fs.writeFile('./data/notes.json', JSON.stringify(notes), (err, data) => {
        if (err) throw err
    });
    res.json(notes);
});

module.exports = router;