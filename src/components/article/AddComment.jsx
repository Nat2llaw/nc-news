import React from 'react'
import { useParams } from 'react-router-dom';
const AddComment = ({ users }) => {
    const { id } = useParams();
    //user adds text
    //auto add votes=0 article id and date created comment_id
    return (
      <div className='addcommentContainer'>
        {/* <p>{users[0].username}</p> */}
        <form>
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