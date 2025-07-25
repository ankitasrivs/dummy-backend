
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_, res) => res.send('✅ Dummy Backend Running'));
app.get('/users', (_, res) => res.json([{ id: 1, name: 'Ankita' }, { id: 2, name: 'Guest' }]));
app.post('/login', (req, res) => {
  const { username } = req.body;
  res.json({ message: `Logged in as ${username}` });
});

app.listen(PORT, () => console.log(`✅ Running on http://localhost:${PORT}`));
