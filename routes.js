const {app} = require('./app');
const bodyParser = require('body-parser');
const models = require('./models');
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.json({
    GET:[
      "/words/:categoryId",
      "/categories"
    ]
  })
});

app.get('/words/:categoryId', (req, res) => {
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
