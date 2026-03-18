const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Aku Workspace service is running!');
});

app.listen(port, () => {
  console.log(`Aku Workspace service listening on port ${port}`);
});
