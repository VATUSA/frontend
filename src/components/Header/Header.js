import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import './Header.scss';
import logo from './logo-dark.png';
// import headerImage from './head.jpg';


const Header = () => (
  <div>
    <Container fluid className="head">
      <Image src={logo} className="logo" />
    </Container>
  </div>
);

export default Header;
