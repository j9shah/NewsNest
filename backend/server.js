const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); 
const Article = require('./models/Article'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing middleware
app.use(cors());
app.use(express.json());

// Route to save an article
app.post('/api/articles/save', async (req, res) => {
  const { userId, article } = req.body;

  console.log('Saving article for userId:', userId);
  console.log('Article data:', article); 

  if (!userId) {
    console.log('Missing userId'); // Debugging
    return res.status(400).json({ error: 'User ID is required' });
  }

  if (!article || !article.title || !article.url) {
    console.log('Article data is incomplete:', article); // Debugging
    return res.status(400).json({ error: 'Article data is incomplete' });
  }

  try {
    const newArticle = new Article({
      userId,
      title: article.title,
      url: article.url,
      description: article.description,
      urlToImage: article.urlToImage,
    });

    await newArticle.save();
    console.log('Article saved successfully:', newArticle); // Success log
    res.status(201).json({ message: 'Article saved successfully' });
  } catch (error) {
    console.error('Error saving article to the database:', error); // Log database errors
    res.status(500).json({ error: 'Failed to save article' });
  }
});

// Route to fetch saved articles for a user
app.get('/api/articles/saved/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const savedArticles = await Article.find({ userId: userId });
    res.status(200).json(savedArticles);
  } catch (error) {
    console.error('Error fetching saved articles:', error);
    res.status(500).json({ error: 'Failed to fetch saved articles' });
  }
});


// Route to delete an article (unsave)
app.delete('/api/articles/unsave/:id', async (req, res) => {
  try {
    const { userId } = req.body; 
    const articleId = req.params.id;

    // Find and delete the article by userId and articleId
    const deletedArticle = await Article.findOneAndDelete({ _id: articleId, userId });

    if (deletedArticle) {
      res.status(200).json({ message: 'Article unsaved successfully' });
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to unsave article' });
  }
});

// Ensure login and registration routes are working
app.use('/api/auth', authRoutes); 

// Basic health check route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// MongoDB connection
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));