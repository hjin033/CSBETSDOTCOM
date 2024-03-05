const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db'); 
const router = express.Router();
const cors = require('cors');

router.use(cors());

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required." });
        }

        const userQueryResult = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

        if (userQueryResult.rows.length === 0) {
            return res.status(404).json({ error: "User not found." });
        }

        const user = userQueryResult.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: "Invalid password." });
        }

        res.json({ message: "Login successful." });
    } 
    
    catch (err) {
        console.error("Error during login process:", err.message);
        res.status(500).json({ error: "An unexpected error occurred during the login process." });
    }
});

module.exports = router;