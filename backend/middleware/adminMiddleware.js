const pool = require('../db')

const isAdmin = async (req, res, next) => {
    try {
        const userid = req.session.userid;

        if (!userID) {
            return res.status(401).json({ message: 'You must be logged in to perform this action.'});
        }

        const result = await pool.query('SELECT isAdmin FROM users WHERE user_id = $1', [userid]);

        if (result.rows.length === 0 || !result.rows[0].is_admin) {
            return res.status(403).json({ message: 'Access denied. You must be an admin to perform this action.' });
        }

        next();
    }

    catch (error) {
        console.error('Admin check failed:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = isAdmin;