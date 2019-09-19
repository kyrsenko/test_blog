import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  `;

  const CreateLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #fff;
    color:#000;
    border-radius: 3px;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid  #fff;
      background-color:#000;
      color:#fff;
  `;

  const Logo = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 5px 10px;
    color: #000;
  `;

  const LogoTitle = styled.h1`
    margin: 0;
    padding: 0;
  `;

  return (
    <Header>
      <Logo to="/">
        <LogoTitle>Blog</LogoTitle>
      </Logo>
      <CreateLink to="/create-post">Create post</CreateLink>
    </Header>
  );
};
