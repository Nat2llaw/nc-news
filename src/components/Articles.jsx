import React from "react";
import { useState, useEffect } from "react";
import { fetchApiArticles } from "../utils/Api";
import ArticleCard from "./ArticleCard";
import "./articles.css"

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiArticles().then((res) => {
      setArticles(res);
      setLoading(false);
    });
  }, []);
    
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
        <div>
            <h1>All Articles</h1>
        <div className="allArticles">
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </div>
      </div>
    );
  }
};

export default Articles;
