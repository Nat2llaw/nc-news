import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchApiArticlesByTopics } from "../../utils/Api";
import TopicArticles from "./TopicArticles";
import SearchTopics from "./SearchTopics";
import SortOrderTopics from "./SortOrderTopics";

const Topics = () => {
  const { selectedtopic } = useParams();
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);

  fetchApiArticlesByTopics(selectedtopic)
    .then((res) => {
      setArticles(res);
      setLoading(false);
    })
    .catch((error) => {
      setStatus(error.response.status);
    });
  
  if (status === 400) return <h2>400: Bad request</h2>;
  if (status === 403) return <h2>403: Forbidden</h2>;
  if (status === 404) return <h2>404: Not found</h2>;
  
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div className="searchtopics">
          <SearchTopics />
        </div>
        <h2>Selected Topic: {selectedtopic}</h2>
        <SortOrderTopics topic={selectedtopic} />
        <div className="allArticlesByTopic">
          {articles.map((article) => {
            return <TopicArticles article={article} key={article.article_id} />;
          })}
        </div>
      </div>
    );
  }
};

export default Topics;
