import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext'; 

const News = () => {
  const { authState } = useContext(AuthContext); 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(''); 

  // Fetch news based on search query or 'latest' by default
  const fetchNews = async (searchQuery = 'latest') => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  const saveArticle = async (article) => {
    try {
      if (!authState.token || !authState.userId) {
        alert('Please log in to save articles.');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/articles/save',
        { userId: authState.userId, article },
        { headers: { Authorization: `Bearer ${authState.token}` } }
      );
      alert(response.data.message);
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Failed to save article');
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Handle search form submit
  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews(query);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">News</h1>

      {/* Search Bar */}
      <form className="d-flex mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search for news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {articles.map((article) => (
            <div key={article.url} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                  <button className="btn btn-success mt-2" onClick={() => saveArticle(article)}>
                    Save for Later
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

export default News;