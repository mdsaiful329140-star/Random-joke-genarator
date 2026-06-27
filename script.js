// Fetches random jokes from icanhazdadjoke
// You can point API_BASE to the proxy server (e.g. '/api/joke') if using server.js
const API_BASE = 'https://icanhazdadjoke.com/';

const jokeEl = document.getElementById('joke');
const newJokeBtn = document.getElementById('newJoke');
const copyBtn = document.getElementById('copyJoke');

async function fetchJoke() {
  try {
    jokeEl.textContent = 'Loading…';
    const res = await fetch(API_BASE, {
      headers: { Accept: 'application/json', 'User-Agent': 'Random-Joke-Generator (example)' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // icanhazdadjoke returns { id, joke }
    jokeEl.textContent = data.joke || 'No joke found.';
  } catch (err) {
    console.error('Error fetching joke:', err);
    jokeEl.textContent = 'Could not load a joke. Try again.';
  }
}

newJokeBtn.addEventListener('click', fetchJoke);

copyBtn.addEventListener('click', async () => {
  const text = jokeEl.textContent || '';
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => (copyBtn.textContent = 'Copy'), 1500);
  } catch (err) {
    console.warn('Clipboard copy failed', err);
    copyBtn.textContent = 'Copy (failed)';
    setTimeout(() => (copyBtn.textContent = 'Copy'), 1500);
  }
});

// Load the first joke on page open
fetchJoke();
