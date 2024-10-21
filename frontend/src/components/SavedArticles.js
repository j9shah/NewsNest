import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const SavedArticles = () => {
  const { authState } = useContext(AuthContext); 
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch saved articles
  const fetchSavedArticles = async () => {
    if (!authState.userId) {
      console.error('User not logged in.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/articles/saved/${authState.userId}`);
      setSavedArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching saved articles:', error);
      setLoading(false);
    }
  };

  // Function to remove an article
  const removeArticle = async (articleId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/articles/unsave/${articleId}`, {
        data: { userId: authState.userId } 
      });

      if (response.status === 200) {
        // Removes the article from the state after successful deletion
        setSavedArticles(savedArticles.filter(article => article._id !== articleId));
      }
    } catch (error) {
      console.error('Error removing article:', error);
      alert('Failed to remove article');
    }
  };

  useEffect(() => {
    fetchSavedArticles(); 
  }, []);

  return (
    <div className="container mt-4">
      <h1>Saved Articles</h1>
      {loading ? (
        <p>Loading...</p>
      ) : savedArticles.length === 0 ? (
        <p>No articles saved yet.</p>
      ) : (
        <div className="row">
          {savedArticles.map((article) => (
            <div key={article._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt={article.title || 'Article image'}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title || 'No title available'}</h5>
                  <p className="card-text">{article.description || 'No description available'}</p>
                  <a
                    href={article.url}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                  <button
                    onClick={() => removeArticle(article._id)} 
                    className="btn btn-danger mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedArticles;