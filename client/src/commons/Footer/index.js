import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  const Footer = styled.footer`
    display: flex;
    padding: 10px;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  `;

  return (
    <Footer>
      <p>© 2019 Kyrsenko Oleksii</p>
    </Footer>
  );
};
