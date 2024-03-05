const express = require('express');
const authRoutes = require('./routes/authRoutes');
const bcrypt = require('bcrypt');
const pool = require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Database connection successful:', res.rows[0]);
    }
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use('/api/auth', authRoutes);

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser = await pool.query(
            'INSERT INTO users ("username", "password", "balance", "isAdmin") VALUES ($1, $2, $3, $4) RETURNING *',
            [username, hashedPassword, 100, false]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(4000, () => {
    console.log('Server started on port 4000');
});