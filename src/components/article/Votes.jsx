import React from "react";
import "./votes.css";
import { useState, useEffect } from "react";
import { changeApiArticleVotes } from "../../utils/Api";
import { useParams } from "react-router-dom";

const Votes = ({ votes }) => {
  const [vote, setVote] = useState(0);
  const [totalVotes, setTotalVotes] = useState(votes);
  const [disable, setDisable] = useState(false);
  const { id } = useParams();

  const incVote = (event) => {
    event.preventDefault();
    setDisable(true);
    setVote((currVote) => {
      return currVote + 1;
    });
  };
  const decVote = (event) => {
    event.preventDefault();
    setDisable(true);
    setVote((currVote) => {
      return currVote - 1;
    });
  };
  useEffect(() => {
    changeApiArticleVotes(id, vote).then((res) => {
      setTotalVotes(res.article.votes);
    });
  }, [vote, id]);

  return (
    <>
      <div className="voteContainer">
        <button
          className="submitVote"
          type="submit"
          disabled={disable}
          onClick={incVote}
        >
          👍
        </button>
        <h2>Votes: {totalVotes} </h2>
        <button
          className="submitVote"
          type="submit"
          disabled={disable}
          onClick={decVote}
        >
          👎
        </button>
      </div>
    </>
  );
};

export default Votes;
