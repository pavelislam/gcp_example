const express = require('express');
const app = express();
const data = require('./resources/resumeData.json');

app.get('/resume', (req, res) => {
  console.log('node-backend-rest-api received a request');
  res.header("Content-Type",'application/json');
  const target = process.env.TARGET || 'World';
  res.send(data)	;
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('node-backend-rest-api listening on port', port);
});