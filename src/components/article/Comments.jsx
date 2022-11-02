import React from 'react'
import { useState } from 'react';
import { fetchApiArticleComments } from '../../utils/Api'
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard'
import AddComment from './AddComment';

const Comments = ({users}) => {
    const { id } = useParams();
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

    fetchApiArticleComments(id).then((res) => {
      setComments(res);
      setLoading(false);
    });
    
  if (loading) {
    return <p>Loading...</p>;
  } else {
      return (
        <div>
        <div className="comments">
        </div>
          <h1>All Comments</h1>
          <AddComment users={users} />
        <div className="allComments">
          {comments.map((comment) => {
              return <CommentCard comment={comment} key={comment.comment_id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Comments