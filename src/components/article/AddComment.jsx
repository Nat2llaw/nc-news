import React from 'react'
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { addApiArticleComment } from '../../utils/Api';
const AddComment = ({ users }) => {
  const { id } = useParams();
    const [body, setBody] = useState("");
    const [message, setMessage] = useState("");

  const addComment = (event) => {
    event.preventDefault();
    const newComment = event.target.input.value;
      setBody(newComment);
      setMessage("Comment Posted")
  };
  useEffect(() => {
    addApiArticleComment(id, {username:users[0].username, body:body}).then((res) => {
        return <p>{message}</p>
    });
  }, [id, body, message, users]);

  return (
    <div className="addcommentContainer">
      <form onSubmit={addComment}>
        <fieldset className="commentBox">
          <legend className="">Add Comment</legend>
          <div>
            <label htmlFor="input" className="field">
              input comment:
            </label>
            <input name="input" type="text" />
            <button className="submit" type="submit">
              add comment
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddComment