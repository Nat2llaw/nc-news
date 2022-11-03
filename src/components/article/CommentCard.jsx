import React from "react";
import { Link } from "react-router-dom";
import "./comments.css"
import DeleteComment from "./DeleteComment"

const CommentCard = ({ user, comment }) => {
  return (
    <>
      <div className="commentContainer">
        <p className="author">Author: {comment.author}</p>
        <div className="info">
        <Link className="article_id" to={`/articles/${comment.article_id}`}>
          Article ID: {comment.article_id}
        </Link>
        <p className="votes">Votes: {comment.votes}</p>
        </div>
        <p className="createdAt">
          Date Created: {new Date(comment.created_at).toString()}
        </p>
        <p className="body">{comment.body}</p>
        <DeleteComment
          user={user}
          comment_id={comment.comment_id}
          author={comment.author}
        />
      </div>
    </>
  );
};

export default CommentCard;
