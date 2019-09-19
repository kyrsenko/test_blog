import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Lines } from 'react-preloaders';

import { fetchPosts } from '../../store/actions';
import { PostPreview } from '../PostPreview';

const mapStateToProps = state => {
  return {
    posts: state.fetchReducer.posts
  };
};

export const Posts = connect(
  mapStateToProps,
  { fetchPosts }
)(props => {
  const { posts, fetchPosts } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
    setLoading(false);
  }, [fetchPosts]);

  return (
    <React.Fragment>
      {posts
        ? posts.reverse().map((item, index) => {
            return <PostPreview state={item} key={index} />;
          })
        : null}
      <Lines customLoading={loading} time={200} />
    </React.Fragment>
  );
});
