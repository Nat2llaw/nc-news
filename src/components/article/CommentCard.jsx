import React from "react";
import { Link } from "react-router-dom";
import "./comments.css"

const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="commentContainer">
        <p className="author">Author: {comment.author}</p>
        <div className="info"><Link className="article_id" to={`/articles/${comment.article_id}`}>
          Article ID: {comment.article_id}
        </Link>
        <p className="votes">Votes: {comment.votes}</p>
        <p className="createdAt">Date Created: {comment.created_at}</p></div>
        <p className="body">{comment.body}</p>
      </div>
    </>
  );
};

export default CommentCard;
