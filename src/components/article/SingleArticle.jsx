import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchApiArticleId } from "../../utils/Api";
import Votes from "./Votes";
import "./SingleArticles.css"

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("")

  useEffect(() => {
    fetchApiArticleId(id)
      .then((res) => {
        setArticle(res);
        setLoading(false);
      })
      .catch((error) => {
        setStatus(error.response.status)
      })
  }, [id]);
  
  if (status === 400) return <h2>400: Bad request</h2>;
  if (status === 403) return <h2>403: Forbidden</h2>;
  if (status === 404) return <h2>404: Not found</h2>;

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="articleContainer">
        <h2>{article.title}</h2>
        <h3>Author: {article.author}</h3>
        <h3>{new Date(article.created_at).toString()}</h3>
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