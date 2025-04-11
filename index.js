const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const testRoutes = require('./src/routes/test');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', testRoutes);

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 작동 중`);
});
