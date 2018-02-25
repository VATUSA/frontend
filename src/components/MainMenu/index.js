import React from 'react';
import { Container, Image, Menu, Button } from 'semantic-ui-react';
import logo from '../../static/logo-light.png'; // Light preferred, dark usable

export default () => (
  <Container>
    <Menu.Item><Image size="small" src={logo} /></Menu.Item>
    <Menu.Item as="a" active>Home</Menu.Item>
    <Menu.Item as="a">Facilities</Menu.Item>
    <Menu.Item as="a">Forums</Menu.Item>
    <Menu.Item as="a">Division Info</Menu.Item>
    <Menu.Item as="a">Pilot Tools</Menu.Item>
    <Menu.Item as="a">Join Us</Menu.Item>
    <Menu.Item as="a">TMU Maps</Menu.Item>
    <Menu.Item as="a">Support</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item className="item">
        <Button as="a" primary>Log in</Button>
      </Menu.Item>
    </Menu.Menu>
  </Container>
);
