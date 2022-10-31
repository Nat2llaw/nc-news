import React from "react";

const TopicSearch = ({setTopic }) => {
  const topicHandler = (event) => {
    event.preventDefault();
    const {
      target: {
        elements: { topic },
      },
    } = event;
    console.log(topic.value)
    setTopic(topic.value);
  };
  return (
    <div>
      <form onSubmit={topicHandler}>
        <fieldset>
          <legend>Search by Topic</legend>
          <div className="searchContainer">
            <label htmlFor="topic" className="field">
              Search Term:
            </label>
            <select name="topic" id="searchTopic">
              <option id="select">coding</option>
              <option id="select">cooking</option>
              <option id="select">football</option>
            </select>
          </div>
          <button className="submit" type="submit">
            Search
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default TopicSearch;
