import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions';

export const PostCreationPage = connect(
  null,
  { createPost }
)(props => {
  // console.log(props);
  const { createPost } = props;
  const [data, setData] = useState({
    title: '',
    body: '',
    author: 'User'
  });
  const onSubmitHandler = e => {
    e.preventDefault();
    createPost(data);
    props.history.push('/');
  };
  const onChangeHandler = e => {
    const name = e.target.getAttribute('name');
    const value = e.target.value;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <input
          type="text"
          name="title"
          onChange={onChangeHandler}
          style={{ width: '100%' }}
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          style={{ width: '100%' }}
          name="body"
          rows="30"
          onChange={onChangeHandler}
          placeholder="Text"
        />
      </div>
      <div>
        <input
          type="text"
          name="author"
          onChange={onChangeHandler}
          style={{ width: '100%' }}
          placeholder="Your name"
        />
      </div>
      <button type="submit">save</button>
    </form>
  );
});
