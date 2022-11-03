import React from "react";
import "./votes.css"
import { useState, useEffect } from "react";
import { changeApiArticleVotes } from "../../utils/Api";
import { useParams } from "react-router-dom";

const Votes = ({ votes }) => {
  const [vote, setVote] = useState(0);
  const [totalVotes, setTotalVotes] = useState(votes);
  const { id } = useParams();

  const changeVote = (event) => {
    event.preventDefault();
    const votechange = event.target.input.value;
    setVote(votechange);
  };
    useEffect(() => {
      changeApiArticleVotes(id, vote).then((res) => {
        setTotalVotes(res.article.votes);
      });  
    }, [vote, id])
  
  return (
    <>
      <div className="voteContainer">
        <form onSubmit={changeVote}>
          <fieldset className="voteBox">
            <legend className="voteTitle">Change Vote</legend>
            <div>
              <label htmlFor="input" className="field">
                input a number:
              </label>
              <input name="input" type="number" />
            <button className="submit" type="submit">
              vote
              </button>
            </div>
            <h2>Votes: {totalVotes} </h2>
            <h2>Changed by: {vote}</h2>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Votes;
