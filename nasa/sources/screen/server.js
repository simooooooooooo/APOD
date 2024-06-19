const express = require('express');
const translate = require('google-translate-api');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text } = req.body;
  try {
    const translatedText = await translate(text, { to: 'es' });
    res.json({ translatedText: translatedText.text });
  } catch (error) {
    console.error('Error translating text:', error);
    res.status(500).json({ error: 'Error translating text' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
