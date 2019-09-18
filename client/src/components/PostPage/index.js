import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Lines } from 'react-preloaders';

import { fetchPost, addComment, deletePost } from '../../store/actions';

const mapStateToProps = state => {
  return { post: state.fetchReducer.post };
};

export const PostPage = connect(
  mapStateToProps,
  { fetchPost, addComment, deletePost }
)(props => {
  const { post, fetchPost, addComment, deletePost } = props;

  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(true);
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    fetchPost(props.match.params.id);
    setLoading(false);
  }, [fetchPost, props.match.params.id, flag]);

  const onSubmitHandler = e => {
    e.preventDefault();
    post[0].comments.push(textValue);
    addComment(props.match.params.id, post[0]);
    setTextValue('');
    setFlag(!flag);
  };
  const onChangeHandler = e => {
    const value = e.target.value;
    setTextValue(value);
  };

  const onDeleteHandler = () => {
    deletePost(props.match.params.id);
    props.history.push('/');
  };

  const Comments = () => {
    return post[0].comments.length ? (
      <section>
        <h3>Comments</h3>
        {post[0].comments.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </section>
    ) : null;
  };

  return (
    <React.Fragment>
      {post ? (
        <section>
          <article>
            <h2>{post[0].title}</h2>
            <p>{post[0].body}</p>
            <div>
              <span>Created: {post[0].date.split('T')[0]}</span>
              <span>by {post[0].author}</span>
            </div>
            <button onClick={onDeleteHandler}>Delete post</button>
          </article>
          <Comments />
          <form onSubmit={onSubmitHandler}>
            <textarea
              style={{ width: '100%' }}
              name="comment"
              rows="20"
              value={textValue}
              onChange={onChangeHandler}
              placeholder="Your comment..."
            />
            <button>Add a comment</button>
          </form>
        </section>
      ) : null}
      <Lines customLoading={loading} time={200} />
    </React.Fragment>
  );
});
