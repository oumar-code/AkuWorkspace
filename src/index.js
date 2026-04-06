const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Aku Workspace service is running!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'akuworkspace', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Aku Workspace service listening on port ${port}`);
});
