const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// Simple health check
app.get('/', (req, res) => {
  res.send('✅ Frontend OK');
});

// Proxy to backend (will work once backend is up)
app.post('/api/submit', async (req, res) => {
  try {
    const response = await fetch('http://backend:5000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Backend unreachable' });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('🚀 Frontend running on port 3000');
});
