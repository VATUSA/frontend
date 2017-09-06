import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu className="navBar">
        <Container>
          <Menu.Item name="Home">
            Home
          </Menu.Item>

          <Dropdown simple item text="Facilities">
            <Dropdown.Menu>
              {/* This needs to be replaced with an API call */}
              <Dropdown.Item text="Albuquerque ARTCC" as="a" target="_blank" href="http://www.zabartcc.org" />
              <Dropdown.Item text="Anchorage ARTCC" as="a" target="_blank" href="http://www.vzanartcc.net" />
              <Dropdown.Item text="Atlanta ARTCC" value="http://www.atlantacenter.net" />
              <Dropdown.Item text="Boston ARTCC" as="a" target="_blank" href="http://www.bvartcc.com" />
              <Dropdown.Item text="Chicago ARTCC" as="a" target="_blank" href="http://www.zauartcc.org" />
              <Dropdown.Item text="Cleveland ARTCC" as="a" target="_blank" href="http://www.zobartcc.com" />
              <Dropdown.Item text="Denver ARTCC" as="a" target="_blank" href="http://www.denartcc.org" />
              <Dropdown.Item text="Fort Worth ARTCC" as="a" target="_blank" href="http://www.zfwartcc.net" />
              <Dropdown.Item text="Honolulu CF" as="a" target="_blank" href="http://www.hcfartcc.net" />
              <Dropdown.Item text="Houston ARTCC" as="a" target="_blank" href="http://www.zhuartcc.org" />
              <Dropdown.Item text="Indianapolis ARTCC" as="a" target="_blank" href="http://www.zidartcc.org" />
              <Dropdown.Item text="Jacksonville ARTCC" as="a" target="_blank" href="http://www.zjxartcc.org" />
              <Dropdown.Item text="Kansas City ARTCC" as="a" target="_blank" href="http://www.kcartcc.com" />
              <Dropdown.Item text="Los Angeles ARTCC" as="a" target="_blank" href="http://www.laartcc.org" />
              <Dropdown.Item text="Memphis ARTCC" value="http://www.vzme.org" />
              <Dropdown.Item text="Miami ARTCC" as="a" target="_blank" href="http://www.zmaartcc.net" />
              <Dropdown.Item text="Minneapolis ARTCC" as="a" target="_blank" href="http://www.minniecenter.org" />
              <Dropdown.Item text="New York ARTCC" as="a" target="_blank" href="http://www.nyartcc.org" />
              <Dropdown.Item text="Oakland ARTCC" value="http://www.oakartcc.com" />
              <Dropdown.Item text="Salt Lake City ARTCC" as="a" target="_blank" href="http://www.zlcartcc.com" />
              <Dropdown.Item text="Seattle ARTCC" as="a" target="_blank" href="http://www.zseartcc.org" />
              <Dropdown.Item text="Washington D.C. ARTCC" as="a" target="_blank" href="http://www.vzdc.org" />
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item name="Forums">
            Forums
          </Menu.Item>
          <Dropdown simple item text="Division Info" scrolling>
            <Dropdown.Menu>
              <Dropdown.Item text="Policies" />
              <Dropdown.Item text="Computer Based Training (CBT)" />
              <Dropdown.Item text="Events Calendar" />
              <Dropdown.Item text="Members and Staff" />
              <Dropdown.Item text="Solo Certs" />
              <Dropdown.Item text="Ace Team" />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown simple item text="Pilot Tools">
            <Dropdown.Menu>
              <Dropdown.Item text="Getting Started" as="a" target="_blank" href="https://www.vatsim.net/pilots/getting-started" />
              <Dropdown.Item text="Events Calendar" as="a" target="_blank" href="https://www.vatusa.net/forums/?action=calendar" />
              <Dropdown.Item text="Training" as="a" target="_blank" href="http://www.vatsim.net/pilots/training" />
              <Dropdown.Item text="Virtual Airlines" as="a" target="_blank" href="http://www.vatsim.net/pilots/virtual-airlines" />
              <Dropdown.Item text="Charts" as="a" target="_blank" href="http://www.aircharts.org/" />
              <Dropdown.Item text="Routes" as="a" target="_blank" href="http://www.flightaware.com/statistics/ifr-route/" />
              <Dropdown.Item text="VATSIM Stats/Tracking" as="a" target="_blank" href="http://stats.vatsim.net/" />
              <Dropdown item text="Weather">
                <Dropdown.Menu>
                  <Dropdown.Item text="METARs" as="a" target="_blank" href="" />
                  <Dropdown.Item text="TAFs" as="a" target="_blank" href="" />
                  <Dropdown.Item text="PIREPs" as="a" target="_blank" href="" />
                  <Dropdown.Item text="Baloon Sounding" as="a" target="_blank" href="" />
                  <Dropdown.Item text="Winds Aloft" as="a" target="_blank" href="" />
                  <Dropdown.Item text="Graphical Forcasts" as="a" target="_blank" href="" />
                  <Dropdown.Item text="Prog Charts" as="a" target="_blank" href="" />
                  <Dropdown.Item text="Satellite Imagery" as="a" target="_blank" href="" />
                  <Dropdown.Item text="RADAR" as="a" target="_blank" href="" />
                  <Dropdown.Item text="ASOS/AWOS Stations" as="a" target="_blank" href="" />
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu name="TMU Maps">
            TMU Maps
          </Menu.Menu>
          <Menu.Menu name="Support">
            Support
          </Menu.Menu>
          <Menu.Menu name="My VATUSA" position="right">
            My VATUSA
          </Menu.Menu>
          <Menu.Menu name="Actions" position="right">
            Actions
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
