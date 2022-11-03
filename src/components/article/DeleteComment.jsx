import React from "react";
import { deleteApiArticlesComment } from "../../utils/Api";

const DeleteComment = ({ user, comment_id, author }) => {
  const deleteComment = (event) => {
    event.preventDefault();
    console.log(comment_id);
    console.log(author)
    

    if (author === user) {
      let q = window.confirm("Delete?")
      if (q === true) {
        deleteApiArticlesComment(comment_id)
        window.alert("comment deleted")
        .catch((error) => {
          console.log(error);
        });
      } else {
        window.alert("delete cancelled");
      }
    } else {
      window.alert("permission denied")
    }
  };

  return (
    <div>
      <button className="delete" onClick={deleteComment}>
        DELETE
      </button>
    </div>
  );
};

export default DeleteComment;
