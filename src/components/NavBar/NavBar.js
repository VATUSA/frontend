import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
import style from './NavBar.scss';

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu className={style.nav}>
        <Container>
          <Menu.Item
            name="Home"
          >
            Home
          </Menu.Item>

          <Dropdown
            item
            text="Facilities"
            scrolling="true"
          >
            <Dropdown.Menu>
              <Dropdown.Item
                text="Albuquerque ARTCC"
                value="http://www.zabartcc.org"
              />
              <Dropdown.Item
                text="Anchorage ARTCC"
                value="http://www.vzanartcc.net"
              />
              <Dropdown.Item
                text="Atlanta ARTCC"
                value="http://www.atlantacenter.net"
              />
              <Dropdown.Item
                text="Boston ARTCC"
                value="http://www.bvartcc.com"
              />
              <Dropdown.Item
                text="Chicago ARTCC"
                value="http://www.zauartcc.org"
              />
              <Dropdown.Item
                text="Cleveland ARTCC"
                value="http://www.zobartcc.com"
              />
              <Dropdown.Item
                text="Denver ARTCC"
                value="http://www.denartcc.or"
              />
              <Dropdown.Item
                text="Fort Worth ARTCC"
                value="http://www.zfwartcc.net"
              />
              <Dropdown.Item
                text="Honolulu CF"
                value="http://www.hcfartcc.net"
              />
              <Dropdown.Item
                text="Houston ARTCC"
                value="http://www.zhuartcc.org"
              />
              <Dropdown.Item
                text="Indianapolis ARTCC"
                value="http://www.zidartcc.org"
              />
              <Dropdown.Item
                text="Jacksonville ARTCC"
                value="http://www.zjxartcc.org"
              />
              <Dropdown.Item
                text="Kansas City ARTCC"
                value="http://www.kcartcc.com"
              />
              <Dropdown.Item
                text="Los Angeles ARTCC"
                value="http://www.laartcc.org"
              />
              <Dropdown.Item
                text="Memphis ARTCC"
                value="http://www.vzme.org"
              />
              <Dropdown.Item
                text="Miami ARTCC"
                value="http://www.zmaartcc.net"
              />
              <Dropdown.Item
                text="Minneapolis ARTCC"
                value="http://www.minniecenter.org"
              />
              <Dropdown.Item
                text="New York ARTCC"
                value="http://www.nyartcc.org"
              />
              <Dropdown.Item
                text="Oakland ARTCC"
                value="http://www.oakartcc.com"
              />
              <Dropdown.Item
                text="Salt Lake City ARTCC"
                value="http://www.zlcartcc.com"
              />
              <Dropdown.Item
                text="Seattle ARTCC"
                value="http://www.zseartcc.org"
              />
              <Dropdown.Item
                text="Washington D.C. ARTCC"
                value="http://www.vzdc.org"
              />
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item
            name="Forums"
          >
            Forums
          </Menu.Item>
          <Menu.Menu
            name="Division Info"
          >
            Division Info
          </Menu.Menu>
          <Menu.Menu
            name="Pilot Tools"
          >
            Pilot Tools
          </Menu.Menu>
          <Menu.Menu
            name="TMU Maps"
          >
            TMU Maps
          </Menu.Menu>
          <Menu.Menu
            name="Support"
          >
            Support
          </Menu.Menu>
          <Menu.Menu
            name="My VATUSA"
            position="right"
          >
            My VATUSA
          </Menu.Menu>
          <Menu.Menu
            name="Actions"
            position="right"
          >
            Actions
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
