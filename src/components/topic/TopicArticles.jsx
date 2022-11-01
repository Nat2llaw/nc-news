import React from 'react'
import {
  Link
} from 'react-router-dom';
const TopicArticles = ({article}) => {
  return (
    <div className="articleContainer">
      <p className="title" key={article.title}>
        {article.title}
      </p>
      <p className="id">
        Article ID: {article.article_id}
      </p>
      <p className="topic" key={article.topic}>
        Topic: {article.topic}
      </p>
    </div>
  );
}

export default TopicArticles