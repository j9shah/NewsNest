const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  url: String,
  description: String,
  urlToImage: String,
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;