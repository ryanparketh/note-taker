const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get("/notes", function (req, res) {
    console.log('hit/api/notes')
    console.log(path.join(__dirname, "../db/db.json"));

    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  router.get("/notes/:id", function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
  });

  router.post("/notes", function (req, res) {
    console.log('hit post route');
    let dbNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"));
    console.log('read succesfully from file');
    let newNote = req.body;
    let uniqueID = dbNotes.length.toString();
    newNote.id = uniqueID;
    dbNotes.push(newNote);
  
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(dbNotes));
    console.log("Note saved to DB. Content: ", newNote);
    res.json(dbNotes);
  });

  module.exports = router;