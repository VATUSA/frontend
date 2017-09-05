import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu className="navBar">
        <Container>
          <Menu.Item
            name="Home"
          >
            Home
          </Menu.Item>

          <Dropdown
            item
            text="Facilities"
            scrolling
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
          <Dropdown
            item
            text="Division Info"
            scrolling
          >
            <Dropdown.Menu>
              <Dropdown.Item
                text="Policies"
              />
              <Dropdown.Item
                text="Computer Based Training (CBT)"
              />
              <Dropdown.Item
                text="Events Calendar"
              />
              <Dropdown.Item
                text="Members and Staff"
              />
              <Dropdown.Item
                text="Solo Certs"
              />
              <Dropdown.Item
                text="Ace Team"
              />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            item
            text="Pilot Tools"
            scrolling
          >
            <Dropdown.Menu>
              <Dropdown.Item
                text="Getting Started"
              />
              <Dropdown.Item
                text="Events Calendar"
              />
              <Dropdown.Item
                text="Training"
              />
              <Dropdown.Item
                text="Virtual Airlines"
              />
              <Dropdown.Item
                text="Charts"
              />
              <Dropdown.Item
                text="Routes"
              />
              <Dropdown.Item
                text="VATSIM Stats/Tracking"
              />
              <Dropdown.Divider />
              <Dropdown.Header
                content="Weather"
              />
              <Dropdown.Menu
                scrolling
              >
                <Dropdown.Item
                  text="METARs"
                />
                <Dropdown.Item
                  text="TAFs"
                />
                <Dropdown.Item
                  text="PIREPs"
                />
                <Dropdown.Item
                  text="Baloon Sounding"
                />
                <Dropdown.Item
                  text="Winds Aloft"
                />
                <Dropdown.Item
                  text="Graphical Forcasts"
                />
                <Dropdown.Item
                  text="Prog Charts"
                />
                <Dropdown.Item
                  text="Satellite Imagery"
                />
                <Dropdown.Item
                  text="RADAR"
                />
                <Dropdown.Item
                  text="ASOS/AWOS Stations"
                />
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
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
