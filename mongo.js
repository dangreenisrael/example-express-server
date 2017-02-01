const mongoose = require('mongoose');
let mongoUrl = 'mongodb://localhost/OpenCharades';
if (process.env.MONGODB_URI){
  mongoUrl = process.env.MONGODB_URI;
}
mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;
module.exports = mongoose;