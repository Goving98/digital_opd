const pool = require('../db');

const getPatients = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM patients');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getPatients };