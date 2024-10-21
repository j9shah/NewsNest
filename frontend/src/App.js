import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import SavedArticles from './components/SavedArticles';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />

        {/* Protected Routes */}
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <Layout><News /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-articles"
          element={
            <ProtectedRoute>
              <Layout><SavedArticles /></Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;