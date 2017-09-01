import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import style from './NavBar.scss';

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu className={style.nav}>
        <Container>
          <Menu.Item
            name="Home"
          >
            Editorials
          </Menu.Item>

          <Menu.Item
            name="Facilities"
          >
            Reviews
          </Menu.Item>

          <Menu.Item
            name="Forums"
          >
            Forums
          </Menu.Item>
          <Menu.Item
            name="Division Info"
          >
            Division Info
          </Menu.Item>
          <Menu.Item
            name="Pilot Tools"
          >
            Pilot Tools
          </Menu.Item>
          <Menu.Item
            name="TMU Maps"
          >
            TMU Maps
          </Menu.Item>
          <Menu.Item
            name="Support"
          >
            Support
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
