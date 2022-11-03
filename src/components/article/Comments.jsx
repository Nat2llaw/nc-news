import React from "react";
import { useState } from "react";
import { fetchApiArticleComments, fetchApiUsers } from "../../utils/Api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  fetchApiUsers().then((res) => {
    setUser(res[0].username);
  });

  fetchApiArticleComments(id).then((res) => {
    setComments(res);
    setLoading(false);
  });

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div className="comments"></div>
        <h1>All Comments</h1>
        <AddComment user={user} setComments={setComments} />
        <div className="allComments">
          {comments.map((comment) => {
            return <CommentCard user={user} comment={comment} key={comment.comment_id} />;
          })}
        </div>
      </div>
    );
  }
};

export default Comments;
