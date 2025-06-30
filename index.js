const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Contoh koneksi ke MySQL (ubah sesuai database kamu)
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lutfi21', 
  database: 'tokopaedi',
});

// Route register
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ message: 'DB Error', error: err });
    res.status(201).json({ message: 'User registered!' });
  });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
