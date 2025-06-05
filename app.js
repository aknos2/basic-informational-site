import { createServer } from 'http';
import fs from 'fs';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const result = dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.static('public')) //use anything CSS, img, etc in folder public

app.get('/', (req, res) => {
  res.status(200).sendFile('./views/index.html', { root: __dirname});
})

app.get('/about{-me}', (req, res) => {
  res.status(200).sendFile('./views/about.html', { root: __dirname});
})

app.get('/contact{-me}', (req, res) => {
  res.status(200).sendFile('./views/contact-me.html', { root: __dirname});
})

app.get('/{*splat}', (req, res) => {
  res.status(200).sendFile('./views/404.html', { root: __dirname});
})

// Just practicing dotenv
if (process.env.NODE_ENV === 'prod') {
  console.log(result.parsed);
  console.log(`API: ${process.env.API_KEY}`);
}