const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(9000);
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/OpenCharades');
mongoose.Promise = global.Promise;
module.exports.mongoose = mongoose;
const models = require('./models');

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
    console.log(categories);
    res.json(categories);
  }, err=>{
    res.status(500).send(err)
  });
});
