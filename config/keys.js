//Keys.js - figure out what set of credentails to return

if(process.env. NODE_ENV === 'production') {
  //production mode
  modules.export = require('./prod');
} else {
  //development mode
  modules.export = require('./dev');
}
