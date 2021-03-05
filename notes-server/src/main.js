const express = require('express');
const cors = require('cors');
const {Note} = require('./note');

const notes = [];
let counter = 0;

const isDefined = (val) => val !== undefined && val !== null && !(typeof value === 'number' && isNaN(val));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/notes', (req, res) => {
  res.send(notes);
});

app.post('/notes', (req, res) => {
  const {title, text} = req.body;
  if (!title || !isDefined(text)) {
    res.status(400).send();
    return;
  }
  const note = new Note(counter, req.body.title, req.body.text);
  notes.push(note);
  res.status(201).send(counter.toString());
  counter++;
});

app.put('/notes/:id', (req, res) => {
  const id = +req.params.id;
  const {title, text} = req.body;
  if (!title || !isDefined(text) || !isDefined(id)) {
    res.status(400).send();
    return;
  }
  const i = notes.findIndex((n) => n.id === id);
  if (i !== -1) {
    const note = new Note(id, req.body.title, req.body.text);
    notes.splice(i, 1, note);
    res.send();
  } else {
    const note = new Note(counter, req.body.title, req.body.text);
    notes.push(note);
    res.status(201).send(counter.toString());
    counter++;
  }
});

app.delete('/notes/:id', (req, res) => {
  const id = +req.params.id;
  if (!isDefined(id)) {
    res.sendStatus(404);
    return;
  }
  const i = notes.findIndex(n => n.id === id);
  if (i === -1) {
    res.sendStatus(404);
    return;
  }
  notes.splice(i, 1);
  res.sendStatus(204);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});