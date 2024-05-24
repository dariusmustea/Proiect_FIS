const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Darius2@@4',
  database: 'drsdb',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/register', async (req, res) => {
  const { email, password, phone_number, gender } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    db.query(
      'INSERT INTO users (email, password, phone_number, gender) VALUES (?, ?, ?, ?)',
      [email, hashedPassword, phone_number, gender],
      (err, result) => {
        if (err) {
          console.error('Error inserting user into database:', err);
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'Email already registered' });
          }
          return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  } catch (error) {
    console.error('Error in registration process:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
