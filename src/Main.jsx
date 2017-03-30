import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';
import '../dist/style.css';

function Main() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="header">
          <div className="header-title">
            <Link to="/">programng</Link>
          </div>
          <ul className="header-nav-list">
            <Link to="/about"><li className="header-nav-list-item">About</li></Link>
            <Link to="/portfolio"><li className="header-nav-list-item">Portfolio</li></Link>
            <Link to="/blog"><li className="header-nav-list-item">Blog</li></Link>
          </ul>
        </div>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
      </div>
    </BrowserRouter>
  );
}

render(<Main />, document.getElementById('app'));
