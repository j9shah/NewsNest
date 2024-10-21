import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="layout-wrapper">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#dfdfdf' }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">NewsNest</Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/news" className="nav-link">News</Link>
              </li>
              <li className="nav-item">
                <Link to="/saved-articles" className="nav-link">Saved Articles</Link>
              </li>

              {!authState.token ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-primary me-2">Log In</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="btn btn-primary">Get Started for Free</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-outline-danger me-2">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container content-area">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;