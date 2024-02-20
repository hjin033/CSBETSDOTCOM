const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const registerUser = async (req, res) => {
    // Registration logic...
};

const loginUser = async (req, res) => {
    // Authentication logic...
};

module.exports = {
    registerUser,
    loginUser
};