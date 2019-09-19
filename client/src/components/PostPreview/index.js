import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostPreview = props => {
  const { state } = props;

  const Post = styled.article`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    border: 1px solid #eee;
    padding: 20px;
    width: 100%;
  `;

  const Title = styled.h3`
    margin: 0;
    padding: 0;
  `;

  const Span = styled.span`
    color: #807f7f;
    margin-right: 10px;
    font-size: 14px;
  `;

  const ReadMore = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: #0000ff;
    margin-top: 10px;
  `;

  return (
    <Post>
      <Title>{state.title}</Title>
      {state.body.length > 200 ? (
        <p>{state.body.slice(0, 200)}...</p>
      ) : (
        <p>{state.body}</p>
      )}
      <div>
        <Span>Created: {state.date.split('T')[0]}</Span>
        <Span>by {state.author}</Span>
      </div>

      <ReadMore to={`/posts/${state._id}`}>Read more...</ReadMore>
    </Post>
  );
};
