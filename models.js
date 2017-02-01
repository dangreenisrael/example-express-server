const mongoose = require('./mongo');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.model('Category', {
  name: String
});

const Word = mongoose.model('Word', {
  name: String,
  category: {type: ObjectId, ref: 'Category'}
});

module.exports.getWords = categoryId => {
  return new Promise((res, rej) => {
    Word.find({'category': categoryId}).then(word => {
      res(word)
    }, err => {
      rej(err);
    });
  }, err => {
    rej(err);
  });
};

module.exports.getCategories = () => {
  return new Promise((res, rej) => {
    Category.find({}).then(categories => {
      res(categories);
    }, err => {
      rej(err);
    });
  });
};

// module.exports.addAction = () => {
//   return new Promise((res, rej) => {
//     Category.find({}).then(categories => {
//       res(categories);
//     }, err => {
//       rej(err);
//     });
//   });
// };