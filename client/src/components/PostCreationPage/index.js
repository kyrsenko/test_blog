import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions';

import './style.scss'

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
    <section className="container">
      <h2 className='edit-title'>Create post</h2>
      <form className='post-form' onSubmit={onSubmitHandler}>
        <div>
          <input
            className='edit-input'
            type="text"
            name="title"
            onChange={onChangeHandler}
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            className="edit-textarea"
            name="body"
            rows="30"
            onChange={onChangeHandler}
            placeholder="Text"
          />
        </div>
        <div>
          <input
            className="edit-author-input"
            type="text"
            name="author"
            onChange={onChangeHandler}
            placeholder="Your name"
          />
        </div>
        <button className="primary-btn" type="submit">
          Create
        </button>
      </form>
    </section>
  );
});
