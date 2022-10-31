import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchTopics = () => {

  const [topic, setTopic] = useState(null);

  const queryHandler = (event) => {
    console.log(event.target.value)
    event.preventDefault();
    setTopic(event.target.value);
  };

  return (
    <div>
      <form>
        <fieldset>
          <legend>Topic Search: {topic}</legend>
          <div className="searchContainer">
            <label htmlFor="term" className="field">
              Search By:{" "}
            </label>
            <select name="term" id="searchTerm" onChange={queryHandler}>
              <option id="select">coding</option>
              <option id="select">cooking</option>
              <option id="select">football</option>
            </select>
          </div>
          <Link to={`/articles/${topic}`}>
            <input type="submit" />
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchTopics;
