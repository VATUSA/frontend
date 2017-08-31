import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';
import style from './Header.scss';
import logo from './logo-dark.png';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className={style.head}>
            <div className={style.layer}>
              <Container>
                <Image src={logo} className={style.logo} />
              </Container>
            </div>
          </div>
        </Container>
        <NavBar />
      </div>
    );
  }
}
