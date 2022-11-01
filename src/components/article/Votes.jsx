import React from "react";
import { useState, useEffect } from "react";
import { changeApiArticleVotes } from "../../utils/Api";
import { useParams } from "react-router-dom";

const Votes = ({ votes }) => {
  const [vote, setVote] = useState(0);
  const [totalVotes, setTotalVotes] = useState(votes);
  const { id } = useParams();

  const  changeVote = (event) => {
    event.preventDefault();
    setVote(event.target.input.value);

    changeApiArticleVotes(id, vote).then((res) => {
      console.log(res)
      console.log(vote)
      setTotalVotes(res.article.votes);
    });
  };

  return (
    <>
      <div className="voteContainer">
        <form onSubmit={changeVote}>
          <fieldset>
            <legend>Change Vote</legend>
            <div>
              <label htmlFor="input" className="field">
                input a number:
              </label>
              <input name="input" type="number"/>
            </div>
            <button className="submit" type="submit">
              vote
            </button>
          </fieldset>
        </form>
        <h2>Votes: {totalVotes} </h2>
        <h2>Changed by: {vote}</h2>
      </div>
    </>
  );
};

export default Votes;
