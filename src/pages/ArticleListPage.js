import React from 'react';
import ArticleContent from './article-content';
import ArticleList from '../Components/ArticleList';
const ArticleListPage = () => {
  return <div>
    <ArticleList articles={ArticleContent}/>
  </div>;
};

export default ArticleListPage;
