import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchApiArticlesByTopics } from '../utils/Api'
import TopicArticles from './TopicArticles'

const Topics = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const topic = searchParams.get("topics")
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
      fetchApiArticlesByTopics(topic).then((res) => {
          setArticles(res);
          console.log(res)
      setLoading(false);
    });
  }, []);
    
    if (loading) {
        return <p>Loading...</p>;
    } else {
        return (
          <div>
            <h2>Search Term Used: {topic}</h2>
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