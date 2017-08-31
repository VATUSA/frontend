import React from 'react';
import { Menu } from 'semantic-ui-react';
import './NavBar.scss';

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu className="nav">
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
      </Menu>
    );
  }
}
