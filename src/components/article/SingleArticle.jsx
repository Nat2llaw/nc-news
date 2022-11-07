import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchApiArticleId } from "../../utils/Api";
import Votes from "./Votes";
import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchApiArticleId(id)
      .then((res) => {
        setArticle(res);
        setLoading(false);
      })
      .catch((error) => {
        setStatus(error.response.status);
      });
  }, [id]);

  if (status === 400) return <h2>400: Bad request</h2>;
  if (status === 403) return <h2>403: Forbidden</h2>;
  if (status === 404) return <h2>404: Not found</h2>;

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="singlearticleContainer">
        <img className="articleImg" src={article.img_url} alt={article.title} />
        <h2 className="articleTitle">{article.title}</h2>
        <div className="baseInfo">
          <h3 className="articleAuthor">Author: {article.author}</h3>
          <h3 className="articleDate">
            {new Date(article.created_at).toLocaleString()}
          </h3>
          <h3 className="articleTopic">Topic: {article.topic}</h3>
        </div>
        <p className="articleBody">{article.body}</p>
        <Votes votes={article.votes} />
        <Link className="commentsLink" to={`/articles/${id}/comments`}>
          <h2 className="articleComments">Click Me To See All Comments</h2>
        </Link>
      </div>
    );
  }
};

export default SingleArticle;
