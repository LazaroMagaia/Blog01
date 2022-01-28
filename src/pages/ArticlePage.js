import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './article-content';
import NotFoundPage from './NotFoundPage';
const ArticlePage = () => {
  const {name} = useParams();
  const article = ArticleContent.find(article=>article.name === name);
    if(!article) return <NotFoundPage/>;
  return <div>
    <h1>{article.title}</h1>
    {article.content.map((paragraph,key)=>(
      <p key={key}>{paragraph}</p>
    ))}
  </div>
};

export default ArticlePage;
