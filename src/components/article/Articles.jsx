import React from "react";
import { useState, useEffect } from "react";
import { fetchApiSortedArticles } from "../../utils/Api";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import "./articles.css";
import SearchTopics from "../topic/SearchTopics";

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortby, setSortBy] = useState("created_at");
  const [orderby, setOrderBy] = useState("desc");
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const handleQueries = (event) => {
    event.preventDefault();
    setSortBy(event.target.sorting.value || "created_at");
    setOrderBy(event.target.ordering.value);
    console.log(sortby)
    
    };

    useEffect(() => {
      fetchApiSortedArticles(sortby, orderby).then((res) => {
        setArticles(res);
        setLoading(false);
      navigate(`/articles/sortby/${sortby}/order/${orderby}`)
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
                  <input type="text" name="sorting" id="sortBox" placeholder="created_at"></input>
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
