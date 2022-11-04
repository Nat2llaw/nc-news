import React from "react";
import { Link } from "react-router-dom";
import "./TopicArticles.css";
const TopicArticles = ({ article }) => {
  return (
    <div className="articleContainer">
      <p className="title" key={article.title}>
        {article.title}
      </p>
      <p className="topic" key={article.topic}>
        Topic: {article.topic}
      </p>
      <p>
        <Link className="id" to={`/articles/${article.article_id}`}>
          Click to read more!!
        </Link>
      </p>
    </div>
  );
};

export default TopicArticles;
