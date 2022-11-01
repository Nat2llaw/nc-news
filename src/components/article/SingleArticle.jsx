import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchApiArticleId } from "../../utils/Api";
import Votes from "./Votes";

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiArticleId(id).then((res) => {
      setArticle(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="articleContainer">
        <h2>{article.title}</h2>
        <h3>Author: {article.author}</h3>
        <h3>{article.created_at}</h3>
        <h3>Topic: {article.topic}</h3>
        <p>{article.body}</p>
        <h2>Comments: {article.comment_count}</h2>
        <Votes />
      </div>
    );
  }
};

export default SingleArticle;
