import React from 'react';
import styled from 'styled-components';

import { Posts } from '../Posts';

export const HomePage = () => {
  const Container = styled.section`
    max-width: 1200px;
    width: 100%;
    padding: 0 15px;
    margin:0 auto;
  `;
console.log(1)
  return (
      <Container>
        <h2>Posts</h2>
        <Posts />
      </Container>
  );
};
