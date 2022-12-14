import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addApiArticleComment } from "../../utils/Api";
const AddComment = ({ user, setComments }) => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const addComment = (event) => {
    event.preventDefault();
    
    const newInputComment = { username: user, body: newComment };
    setMessage("Comment Posted");

    addApiArticleComment(id, newInputComment)
      .catch((error) => {
      setStatus(error.response.status);
    });
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  if (status === 400)
    return (
      <h2>
        400: bad request, no comment input
        <br />
        <br />
        Refresh Page to try again
      </h2>
    );

  if (status === 403) return <h2>403: Forbidden</h2>;
  if (status === 404) return <h2>404: Not found</h2>;

  return (
    <div className="addcommentContainer">
      <form onSubmit={addComment}>
        <fieldset className="commentBox">
          <legend className="">Add Comment</legend>
          <div>
            <label htmlFor="input" className="field">
              input comment:
            </label>
            <input
              name="input"
              type="text"
              placeholder="type here"
              onChange={handleChange}
            />
            <button className="submit" type="submit">
              add comment
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddComment;