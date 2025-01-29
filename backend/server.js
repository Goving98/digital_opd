const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const config = require('../app/config');
const db = new Pool(config.DB_CONFIG);
db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err) => console.error('Database connection error:', err));
app.use(cors());
app.use(bodyParser.json());
wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// API 
app.get('/api/patients', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM patients');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query error' });
  }
});

app.post('/api/scores', async (req, res) => {
  try {
    const { userId, score } = req.body;
    await db.query('INSERT INTO scores (user_id, score) VALUES ($1, $2)', [userId, score]);
    res.json({ message: 'Score saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database insert error' });
  }
});

// Server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
