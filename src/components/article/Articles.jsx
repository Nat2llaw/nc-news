import React from "react";
import { useState, useEffect } from "react";
import { fetchApiSortedArticles } from "../../utils/Api";
import ArticleCard from "./ArticleCard";
import "./articles.css";
import SearchTopics from "../topic/SearchTopics";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortby, setSortBy] = useState("created_at");
  const [orderby, setOrderBy] = useState("desc");
  const [status, setStatus] = useState();

  const handleQueries = (event) => {
    event.preventDefault();
    setSortBy(event.target.sorting.value);
    setOrderBy(event.target.ordering.value);
  };

  useEffect(() => {
    fetchApiSortedArticles(sortby, orderby).then((res) => {
      setArticles(res);
      setLoading(false);
    })
      .catch((error) => {
      setStatus(error.request.status)
    });
  }, [sortby, orderby]);

  if (status === 400) return <p>400: Bad request</p>;
  if (status === 403) return <p>403: Forbidden</p>;
  if (status === 404) return <p>404: Not found</p>;

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div className="searchtopics">
          <SearchTopics />
        </div>
        <div className="filterArticles">
          <form className="sort" onSubmit={handleQueries}>
            <fieldset>
              <div className="inputs">
                <label htmlFor="sorting" className="field">
                  Sort Term:
                </label>
                <input type="text" name="sorting" id="sortBox"></input>
              </div>
              <div className="inputs">
                <label htmlFor="ordering" className="field">
                  Order By:
                </label>
                <select name="ordering" id="orderBox">
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
              <div className="inputs">
                <button type="submit" value="submit">
                  submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
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
