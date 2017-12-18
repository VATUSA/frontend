import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export default () => (
  <Container>
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
