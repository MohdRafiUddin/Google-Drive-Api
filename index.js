const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/users');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.MONGOOSE_URI);

app = express();

//app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(
   cookieSession({
     maxAge: 30*24*60*60*1000,
     keys: [keys.COOKIEKEY]
   })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/downRoutes')(app);
require('./routes/uploadRoutes')(app);

if(process.env.NODE_ENV === 'production'){
  //Express will serve up production assets
  app.use(express.static('client/build'));
  //Express will serve up index.html file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
