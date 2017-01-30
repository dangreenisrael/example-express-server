const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(9000);
app.use(bodyParser.json());
const mongoose = require('mongoose');
let mongoUrl = 'mongodb://localhost/OpenCharades';
if (process.env.READ_ONLY_PASSWORD){
  mongoUrl = `mongodb://read-only-user:${process.env.READ_ONLY_PASSWORD}@ds137759.mlab.com:37759/heroku_j8h75bxw`;
}
mongoose.connect(mongoUrl);
mongoose.Promise = global.Promise;
module.exports.mongoose = mongoose;
const models = require('./models');

app.get('/', (req, res)=>{
  res.json({
    GET:[
      "/words/:categoryId",
      "/categories"
    ]
  })
});
app.get('/words/:categoryId', (req, res)=> {
  const categoryId = req.params.categoryId;
  models.getWords(categoryId).then(words=>{
    res.json(words);
  }, err=>{
    res.status(500).send(err)
  });
});

app.get('/categories', (req, res)=> {
  models.getCategories().then(categories=>{
    res.json(categories);
  }, err=>{
    res.status(500).send(err)
  });
});
