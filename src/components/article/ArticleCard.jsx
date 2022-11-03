import React from 'react'
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <>
      <div className="articleContainer">
        <p className="title" key={article.article_id}>
          {article.title}
        </p>
        <p className="date">{article.created_at}</p>
        <p className="author">Author: {article.author}</p>
        <p className="topic" key={article.topic}>
          Topic: {article.topic}
        </p>
        <p className="votes">
          Votes: {article.votes}
        </p>
        <Link className="id" to={`/articles/${article.article_id}`}>
          Article ID: {article.article_id}
        </Link>
      </div>
    </>
  );
}

export default ArticleCard