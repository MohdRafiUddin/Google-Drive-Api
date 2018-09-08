const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/users');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.MONGOOSE_URI);

app = express();

app.use(
   cookieSession({
     maxAge: 30*24*60*60*1000,
     keys: [keys.COOKIEKEY]
   })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
