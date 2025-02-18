const express = require('express');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

app.use(express.json());

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, GitHub SEC world!');
  });


console.log("Hello, Gitsec world");

// SQL Injection Vulnerability
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  db.get(`SELECT * FROM users WHERE id = ${userId}`, (err, row) => {
    if (err) {
      res.status(500).send('Database error');
    } else {
      res.json(row);
    }
  });
});

// Insecure use of eval
app.post('/execute', (req, res) => {
  const code = req.body.code;
  try {
    const result = eval(code);
    res.send(`Result: ${result}`);
  } catch (err) {
    res.status(500).send('Execution error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});