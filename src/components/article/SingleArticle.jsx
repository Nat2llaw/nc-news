import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { fetchApiArticleId } from "../../utils/Api";
import Votes from "./Votes";

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
        <h3>{article.created_at}</h3>
        <h3>Topic: {article.topic}</h3>
        <p>{article.body}</p>
        <Votes votes={article.votes} />
        <Link className="commentsLink" to={`/articles/${id}/comments`}>
          <h2>Click Me To See All Comments</h2>
        </Link>
      </div>
    );
  }
};

export default SingleArticle;