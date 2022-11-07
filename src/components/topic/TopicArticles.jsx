import React from "react";
import { Link } from "react-router-dom";
import "./TopicArticles.css";
const TopicArticles = ({ article }) => {
  return (
    <div className="articleContainer">
      <img className="articleImg" src={article.img_url} alt={article.title} />
      <p className="title" key={article.article_id}>
        {article.title}
      </p>
      <p className="date">{new Date(article.created_at).toString()}</p>
      <p className="topic" key={article.topic}>
        Topic: {article.topic}
      </p>
      <Link className="id" to={`/articles/${article.article_id}`}>
        Read full article!!
      </Link>
      <div className="vc">
        <p className="votes">Votes: {article.votes}</p>
        <p className="comments">Comments: {article.comment_count}</p>
      </div>
    </div>
  );
};

export default TopicArticles;
