import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchApiArticleId } from "../../utils/Api";

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  fetchApiArticleId(id).then((res) => {
    setArticle(res);
    setLoading(false);
  });

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="articleContainer">
        <h2>{article.title}</h2>
        <h3>Author: {article.author}</h3>
        <h4>{article.created_at}</h4>
        <h4>Topic: {article.topic}</h4>
        <p>{article.body}</p>
        <h2>Comments: {article.comment_count}</h2>
        <h2>Votes: {article.votes}</h2>
      </div>
    );
  }
};

export default SingleArticle;
