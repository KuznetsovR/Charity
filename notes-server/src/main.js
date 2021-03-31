const express = require('express');
const cors = require('cors');
const {Note} = require('./note');
const router = express.Router();
const cookieParser = require('cookie-parser')
const {authHandler, authRouter} = require('./auth-service')
const {notesRouter} = require('./notes-router')


const app = express();
app.use(cors({origin: 'http://127.0.0.1:8080', credentials: true}));

app.use(cookieParser())

app.use(express.json());
app.use('/api/auth', authRouter)

// app.use(authHandler)

app.use('/api/notes', notesRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});