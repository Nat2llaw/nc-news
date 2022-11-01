import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { fetchApiArticlesByTopics } from '../../utils/Api'
import TopicArticles from './TopicArticles'

const Topics = () => {
  const { selectedtopic } = useParams();
  console.log(selectedtopic)
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  
    fetchApiArticlesByTopics(selectedtopic).then((res) => {
      setArticles(res);
      setLoading(false);
    });

      
    if (loading) {
        return <p>Loading...</p>;
    } else {
        return (
          <div>
            <h2>Selected Topic: {selectedtopic}</h2>
            <div className="allArticlesByTopic">
              {articles.map((article) => {
                return (
                  <TopicArticles article={article} key={article.article_id} />
                );
              })}
            </div>
          </div>
        );
    }
}

export default Topics