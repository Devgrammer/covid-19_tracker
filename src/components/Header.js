import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>COVID-19 TRACKER</p>
        <ul>
          <li>
            <Link to="/">STAY SAFE</Link>
          </li>
          <li>
            <Link to="/page-2/">STAY AT YOUR HOME</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
