// Optional: simple Node/Express proxy to icanhazdadjoke
// Use this if you want to avoid direct browser requests or customize usage.
const express = require('express');
const fetch = require('node-fetch'); // npm i node-fetch@2 (or use global fetch in newer Node)
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/joke', async (req, res) => {
  try {
    const r = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json', 'User-Agent': 'Random-Joke-Generator (proxy)' }
    });
    if (!r.ok) return res.status(502).json({ error: 'Upstream error' });
    const json = await r.json();
    res.json(json);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(express.static('.')); // serve index.html and other static files

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
