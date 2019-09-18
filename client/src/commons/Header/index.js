import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <h2>Logo</h2>
      </Link>
      <Link to="/create-post">
        <h2>Create</h2>
      </Link>
    </React.Fragment>
  );
};
