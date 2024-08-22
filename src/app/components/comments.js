// src/app/components/Comments.js
"use client";

import React, { useState } from 'react';

const Comments = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    // Add functionality to submit new comment
    setNewComment('');
  };

  return (
    <div>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
};

export default Comments;
