const express = require('express');
const mongoose = require('mongoose');

app = express();

require('./routes/authRoutes')(app);
require('./services/passport');

const PORT = process.env.PORT || 5000;
app.listen(PORT);
