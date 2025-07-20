

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const Groq = require('groq-sdk');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;


const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


app.use(express.static(__dirname));
app.use(express.json());


app.post('/summarize', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required.' });
    }

    try {
        
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' } 
        });
        const html = response.data;

        
        const $ = cheerio.load(html);
        
        const articleText = $('p').text();

        if (!articleText || articleText.length < 200) {
            return res.status(400).json({ error: 'Could not extract enough readable content from the URL.' });
        }
        
        
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant that summarizes articles. Provide a concise, easy-to-read summary in a few key paragraphs.'
                },
                {
                    role: 'user',
                    content: `Please summarize the following article text:\n\n${articleText}`
                }
            ],
            model: 'llama3-8b-8192', 
            temperature: 0.7,
            max_tokens: 1024
        });

        const summary = chatCompletion.choices[0]?.message?.content || 'Could not generate summary.';
        
        //Send the summary back to the frontend
        res.json({ summary });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch or summarize the article. The URL might be invalid or inaccessible.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});