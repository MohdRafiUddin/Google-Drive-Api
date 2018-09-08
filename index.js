const express = require('express');
const mongoose = require('mongoose');
require('./models/users');
require('./services/passport');
app = express();
const keys = require('./config/keys');

mongoose.connect(keys.MONGOOSE_URI);

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
