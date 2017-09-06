import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';
import UserBlob from '../UserBlob/UserBlob';
import logo from './logo-dark.png';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <div className="head">
            <div className="layer">
              <Container>
                <Image src={logo} className="logo" />
                <UserBlob />
              </Container>
            </div>
          </div>
        </Container>
        <NavBar />
      </div>
    );
  }
}
