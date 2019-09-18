import React from 'react';
import { Link } from 'react-router-dom';

export const PostPreview = props => {
  // console.log(props);
  const { state } = props;
  return (
    <article>
      <h3>{state.title}</h3>
      {state.body.length > 100 ? (
        <p>{state.body.slice(0, 100)}...</p>
      ) : (
        <p>{state.body}</p>
      )}
      <div>
        <span>Created: {state.date.split('T')[0]}</span>
        <span>by {state.author}</span>
      </div>
     
      <Link to={`/posts/${state._id}`}>Read more...</Link>
    </article>
  );
};
