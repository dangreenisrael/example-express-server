const mongoose = require('mongoose');
let mongoUrl = 'mongodb://localhost/OpenCharades';
if (process.env.READ_ONLY_PASSWORD){
  mongoUrl = `mongodb://read-only-user:${process.env.READ_ONLY_PASSWORD}@ds137759.mlab.com:37759/heroku_j8h75bxw`;
}
mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;
module.exports = mongoose;