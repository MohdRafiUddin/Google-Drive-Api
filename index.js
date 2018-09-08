const express = require('express');
const mongoose = require('mongoose');
app = express();
const keys = require('./config/keys');

mongoose.connect(keys.MONGOOSE_URI);

app.get('/', (req, res) => {
  res.send('home route');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
