const router = require("express").Router();
const notes = [];
let counter = 0;
const isDefined = (val) => val !== undefined && val !== null && !(typeof value === 'number' && isNaN(val));


router.get('/', (req, res) => {
  
  setTimeout(() => res.send(notes), 1000)
});

router.post('/', (req, res) => {
  const { heading, content } = req.body;
  if (!heading || !isDefined(content)) {
    res.status(400).send();
    return;
  }
  const note = new Note(counter, req.body.heading, req.body.content);
  notes.push(note);
  res.status(201).send(counter.toString());
  counter++;
});

router.put('/:id', (req, res) => {
  const id = +req.params.id;
  const { heading, content } = req.body;
  if (!heading || !isDefined(content) || !isDefined(id)) {
    res.status(400).send();
    return;
  }
  const i = notes.findIndex((n) => n.id === id);
  if (i !== -1) {
    const note = new Note(id, req.body.heading, req.body.content);
    notes.splice(i, 1, note);
    res.send();
  } else {
    const note = new Note(counter, req.body.heading, req.body.content);
    notes.push(note);
    res.status(201).send(counter.toString());
    counter++;
  }
});

router.delete('/:id', (req, res) => {
  const id = +req.params.id;
  if (!isDefined(id)) {
    res.sendStatus(404);
    return;
  }
  const i = notes.findIndex((n) => n.id === id);
  if (i === -1) {
    res.sendStatus(404);
    return;
  }
  notes.splice(i, 1);
  res.sendStatus(204);
});

module.exports = {notesRouter : router}