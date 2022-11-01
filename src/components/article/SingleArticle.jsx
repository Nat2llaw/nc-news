import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchApiArticleId } from "../../utils/Api";

const SingleArticle = () => {
  const { id } = useParams();
  console.log(id);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiArticleId(id).then((res) => {
      console.log(res);
      setArticle(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="articleContainer">
        <h1>{article.title}</h1>
        <h2>Author: {article.author}</h2>
        <h3>{article.created_at}</h3>
        <h3>Topic: {article.topic}</h3>
        <p>{article.body}</p>
        <h2>Comments: {article.comment_count}</h2>
        <h2>Votes: {article.votes}</h2>
      </div>
    );
  }
};

export default SingleArticle;
