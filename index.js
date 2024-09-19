import express from 'express';
const app = express();
import tasksrt from './routes/taskroutes.js';

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Backend Devs Building Task Manager Api Soon');
});

app.use('/api/v1/tasks', tasksrt);

app.listen(3000, () => {
  console.log('Express server initialized');
});
