const express = require('express')
const { FieldValue } = require('firebase-admin/firestore')
const app = express()
const port = 8383
const { db } = require('./firebase.js')
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));





  app.get('/roster', (req, res) => {
    res.sendFile(path.join(__dirname, 'roster.html'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.get('/student', (req, res) => {
    res.sendFile(path.join(__dirname, 'student.html'));
  });

  app.get('/attendance', (req, res) => {
    res.sendFile(path.join(__dirname, 'attendance.html'));
  });

  app.get('/entries', (req, res) => {
    res.sendFile(path.join(__dirname, 'entries.html'));
  });




app.listen(port, () => console.log(`Server has started on port: ${port}`))