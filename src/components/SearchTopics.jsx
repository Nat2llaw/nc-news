import React from "react";

const SearchTopics = ({ setTopic }) => {
  const queryHandler = (event) => {
      event.preventDefault();
      const {
          target: {
              elements: { term },
          },
      } = event;
      setTopic(term.value)
  };
  return (
    <div>
      <form onSubmit={queryHandler}>
        <fieldset>
          <legend>Topic Search:</legend>
          <div className="searchContainer">
            <label htmlFor="term" className="field">
              Search By:{" "}
            </label>
            <select name="term" id="searchTerm">
              <option id="select">coding</option>
              <option id="select">cooking</option>
              <option id="select">football</option>
            </select>
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchTopics;
