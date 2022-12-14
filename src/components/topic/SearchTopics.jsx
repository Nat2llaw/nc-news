import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchApiTopics } from "../../utils/Api";
import "./searchtopics.css";

const SearchTopics = ({ setTopic }) => {
  const [allTopics, setAllTopics] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiTopics().then((res) => {
      setAllTopics(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <ul>
        <Link to={`/articles`} key="articlesHome">
          <li className="home">🏠</li>
        </Link>
        {allTopics.map((topic) => {
          return (
            <Link
              to={`/articles/topic/${topic.slug}`}
              onClick={() => {
                setTopic([topic.slug]);
              }}
              key={topic.slug}
            >
              <li className="topic">{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    );
  }
};

export default SearchTopics;
