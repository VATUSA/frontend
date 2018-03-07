import React from 'react';
import { Container, Image, Menu, Button, Dropdown } from 'semantic-ui-react';
import logo from '../../static/logo-light.png'; // Light preferred, dark usable
import Facilities from '../FacilitiesList';
import { Link } from 'react-router-dom';

export default class MainMenu extends React.PureComponent {
  onLoginButtonClick = () => {
    window.location.href = 'https://login.vatusa.net';
  };

  render() {
    return (
      <Container>
        <Menu.Item><Image size="small" src={logo} /></Menu.Item>
        <Menu.Item as={Link} to="/" exact="true" active>Home</Menu.Item>
        <Dropdown item text="Facilities">
          <Dropdown.Menu>
            <Facilities />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item href="https://forums.vatusa.net/">Forums</Menu.Item>
        <Dropdown item text="Divison Info">
          <Dropdown.Menu>
            <Dropdown.Item as="a">Policies</Dropdown.Item>
            <Dropdown.Item as="a">Computer Based Training (CBT)</Dropdown.Item>
            <Dropdown.Item as="a">Events Calendar</Dropdown.Item>
            <Dropdown.Item as={Link} to="/division/members">Members and Staff</Dropdown.Item>
            <Dropdown.Item as="a">Solo Certifications</Dropdown.Item>
            <Dropdown.Item as="a">ACE Team</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Pilot Tools">
          <Dropdown.Menu>
            <Dropdown.Item href="https://www.vatsim.net/pilots/getting-started" target="blank">Getting Started</Dropdown.Item>
            <Dropdown.Item href="https://forums.vatusa.net/?action=calendar">Events Calendar</Dropdown.Item>
            <Dropdown.Item href="https://www.vatsim.net/pilots/training" target="blank">Training</Dropdown.Item>
            <Dropdown.Item href="https://www.vatsim.net/pilots/virtual-airlines" target="blank">Virtual Airlines</Dropdown.Item>
            <Dropdown.Item href="http://www.aircharts.org/" target="blank">Charts</Dropdown.Item>
            <Dropdown.Item href="http://www.flightaware.com/statistics/ifr-route/" target="blank">Routes</Dropdown.Item>
            <Dropdown.Item href="https://stats.vatsim.net/" target="blank">VATSIM Stats/Tracking</Dropdown.Item>
            <Dropdown item text="Weather">
              <Dropdown.Menu>
                <Dropdown.Item href="https://www.aviationweather.gov/metar" target="blank">METARSs</Dropdown.Item>
                <Dropdown.Item href="https://www.aviationweather.gov/taf" target="blank">TAFs</Dropdown.Item>
                <Dropdown.Item href="https://www.aviationweather.gov/airep?gis=off" target="blank">PIREPs</Dropdown.Item>
                <Dropdown.Item href="http://weather.uwyo.edu/upperair/sounding.html" target="blank">Baloon Sounding</Dropdown.Item>
                <Dropdown.Item href="https://aviationweather.gov/windtemp?gis=off" target="blank">Winds Aloft</Dropdown.Item>
                <Dropdown.Item href="https://digital.weather.gov/" target="blank">Graphical Forecasts</Dropdown.Item>
                <Dropdown.Item href="https://www.aviationweather.gov/progchart" target="blank">Prog Charts</Dropdown.Item>
                <Dropdown.Item href="https://www.aviationweather.gov/satellite" target="blank">Satellite Imagery</Dropdown.Item>
                <Dropdown.Item href="https://www.aviationweather.gov/radar" target="blank">Radar</Dropdown.Item>
                <Dropdown.Item href="https://www.faa.gov/air_traffic/weather/asos/" target="blank">ASOS/AWOS Stations</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as="a">Join Us</Menu.Item>
        <Menu.Item as="a">TMU Maps</Menu.Item>
        <Menu.Item as="a">Support</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item className="item">
            <Button as="a" primary onClick={this.onLoginButtonClick}>Log in</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    );
  }
}
