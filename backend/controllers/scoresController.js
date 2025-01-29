const pool = require('../db');

const saveScore = async (req, res) => {
  const { userId, score } = req.body;
  try {
    await pool.query('INSERT INTO scores (user_id, score) VALUES ($1, $2)', [userId, score]);
    res.json({ message: 'Score saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { saveScore };