import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Backend Devs Building Task Manager Api Soon');
});

app.listen(3000, () => {
  console.log('Express server initialized');
});