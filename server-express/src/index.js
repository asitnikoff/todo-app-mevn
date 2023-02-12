const express = require('express');
const apiRouter = require('./routes/api.js');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
