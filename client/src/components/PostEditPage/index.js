import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../store/actions';
import './style.scss'

export const PostEditPage = connect(
  null,
  { editPost }
)(props => {
  const { editPost } = props;
  const [data, setData] = useState({
    title: props.location.state.title,
    body: props.location.state.body
  });
  const onSubmitHandler = e => {
    e.preventDefault();
    editPost(props.match.params.id, data);
    props.history.goBack();
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
    <section className='container'>
      <h2 className='edit-title'>Edit post</h2>
      <form className='post-form' onSubmit={onSubmitHandler}>
        <div>
          <input
            className='edit-input'
            type="text"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <textarea
            className='edit-textarea'
            name="body"
            rows="30"
            value={data.body}
            onChange={onChangeHandler}
          />
        </div>
        <button className='primary-btn' type="submit">Edit</button>
      </form>
    </section>
  );
});
