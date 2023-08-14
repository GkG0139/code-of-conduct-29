require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db.js');

app.get('/api/student/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send('Student ID must be provided');
  }

  const sql = 'SELECT * FROM register65 WHERE id = ?';

  try {
    const [rows] = await db.query(sql, [id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
