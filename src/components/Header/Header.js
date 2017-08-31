import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';
import headerStyle from './Header.scss';
import logo from './logo-dark.png';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className={headerStyle.head}>
          <div className={headerStyle.layer}>
            <Image src={logo} className={headerStyle.logo} />
          </div>
        </Container>
        <NavBar />
      </div>
    );
  }
}
