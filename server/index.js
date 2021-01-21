const express = require('express');
const path = require('path')

const app = express();
app.use(express.json());
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../')));
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
