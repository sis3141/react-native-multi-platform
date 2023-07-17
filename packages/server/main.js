const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const port = 3000;
app.use(cors());
app.use(express.static(path.join(__dirname, '../web/build')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/*', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, '../web/build', 'index.html'));
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
