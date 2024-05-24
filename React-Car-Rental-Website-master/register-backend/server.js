// backend/server.js
//mongodb+srv://teopopescu15:jVxJLKIVBjmnWTAe@cluster0.fdupfey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexiune MongoDB
const mongoURI = 'mongodb+srv://teopopescu15:jVxJLKIVBjmnWTAe@cluster0.fdupfey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const User = require('./models/User');

// Ruta de înregistrare
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifică dacă utilizatorul există deja
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creează un nou utilizator
    const newUser = new User({ email, password: hashedPassword });

    // Salvează utilizatorul în baza de date
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
