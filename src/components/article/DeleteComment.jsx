import React from "react";

const DeleteComment = () => {
  const deleteComment = (event) => {
    event.preventDefault();
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
