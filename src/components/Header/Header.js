import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';
import logo from './logo-dark.png';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="head">
          <Image src={logo} className="logo" />
        </Container>
        <NavBar />
      </div>
    );
  }
}
