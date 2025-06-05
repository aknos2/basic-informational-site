import express from  'express';

const app = express();

app.get('/', (req, res) => res.send('Hello'));

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});