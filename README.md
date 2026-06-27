name=README.md
Random Joke Generator

What it is
- Static frontend that fetches random jokes from https://icanhazdadjoke.com/
- Optional Express proxy that forwards requests to the external API

Run locally (frontend-only)
1. Open index.html in a modern browser (Chrome, Firefox, Edge).
2. Or serve it with a static server:
   - Python 3: `python -m http.server 8000` and open http://localhost:8000

Run with Node proxy (optional)
1. Install dependencies:
   - `npm init -y`
   - `npm install express node-fetch@2`
2. Start server:
   - `node server.js`
3. Open http://localhost:3000

Notes & tips
- The frontend calls https://icanhazdadjoke.com/ with Accept: application/json.
- If you get CORS or rate-limit issues, use the proxy (server.js) and set API_BASE in script.js to '/api/joke'.
- Want categories, search, or stash favorites? I can add UI and persistence (localStorage or backend).
