require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.API_KEY;  //REPLACE THIS WITH YOUR OWN API_KEY VALUE IN THE FILE ".env"!

app.use(bodyParser.json());

app.post('/getGPT3Response', async (req, res) => {
    const promptText = req.body.prompt;

    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'OpenAI-GPT-Node.js'
    };

    const data = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "user", "content": promptText }
        ]
    };

    try {
        const response = await axios.post(OPENAI_API_URL, data, { headers });
        res.json({ message: response.data.choices[0].message.content });
    } catch (error) {
        console.error('Error calling OpenAI:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to get response from GPT-3' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});