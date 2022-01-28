import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
            <div id="page-body">
            <Routes>
            <Route path="/" element={<HomePage/>} exact/>
            <Route path="/about" element={<AboutPage/>} exact/>
            <Route path="/article-list" element={<ArticleListPage/>} exact/>
            <Route path="/article/:name" element={<ArticlePage/>} exact/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
