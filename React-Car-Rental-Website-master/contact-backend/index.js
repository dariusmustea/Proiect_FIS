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

// Register endpoint
app.post('/register', async (req, res) => {
  const { email, password, phone_number, type } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    db.query(
      'INSERT INTO users (email, password, phone_number, type) VALUES (?, ?, ?, ?)',
      [email, hashedPassword, phone_number, type],
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

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user from database by email
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
      if (err) {
        console.error('Error fetching user from database:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }

      if (result.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const user = result[0];

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      res.status(200).json({ message: 'Login successful', userType: user.type });
    });
  } catch (error) {
    console.error('Error in login process:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});


app.get('/api/cars/:slug', (req, res) => {
  const { slug } = req.params;
  const query = 'SELECT * FROM cars WHERE carName = ?';

  db.query(query, [slug], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(results[0]);
  });
});

app.get('/api/cars', (req, res) => {
  const query = 'SELECT * FROM cars';
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
});


app.post('/api/reserve', (req, res) => {
  const { carId } = req.body;

  const checkQuantityQuery = 'SELECT quantity FROM cars WHERE id = ?';
  const updateQuantityQuery = 'UPDATE cars SET quantity = quantity - 1 WHERE id = ?';

  db.query(checkQuantityQuery, [carId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Car not found' });
    }

    const car = results[0];

    if (car.quantity <= 0) {
      return res.status(400).json({ message: 'Car is out of stock' });
    }

    db.query(updateQuantityQuery, [carId], (err, updateResults) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }

      res.status(200).json({ message: 'Car reserved successfully' });
    });
  });
});

app.get('/api/carsForm', (req, res) => {
  const { type } = req.query;
  
  // Verifică dacă a fost specificat un tip de mașină
  if (!type) {
    return res.status(400).json({ message: 'Car type not specified' });
  }

  const query = 'SELECT * FROM cars WHERE type = ?';
  
  db.query(query, [type], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
