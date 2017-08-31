import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import style from './Header.scss';
import logo from './logo-dark.png';
// import headerImage from './head.jpg';


const Header = () => (
  <div>
    <Container fluid className={style.head}>
      <Image src={logo} className="logo" />
    </Container>
  </div>
);

export default Header;
