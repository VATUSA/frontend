import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import 'Header.css';
// import logo from './img/logo-dark.png';

const Header = () => (
  <div>
    <Container fluid>
      <Image src="./img/logo-dark.png" className="logo" />
    </Container>
  </div>
);

export default Header;
