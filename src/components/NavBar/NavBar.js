import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
import TMU from '../TMU/TMU';

class NavBar extends React.Component {
  render() {
    const TMUFacilities = [
      [
        {
          name: 'Honolulu Control Facility',
          ident: 'HCF',
        },
      ],
      [
        {
          name: 'Albuquerque ARTCC',
          ident: 'ZAB',
        },
      ],
      [
        {
          name: 'Anchorage ARTCC',
          ident: 'ZAN',
        },
      ],
      [
        {
          name: 'Chicago ARTCC',
          ident: 'ZAU',
        },
        {
          name: 'Chicago TRACON',
          ident: 'C90',
        },
      ],
      [
        {
          name: 'Boston ARTCC',
          ident: 'ZBW',
        },
        {
          name: 'Boston Consolidated TRACON',
          ident: 'A90',
        },
        {
          name: 'Albany ATCT/TRACON',
          ident: 'ALB',
        },
        {
          name: 'Bangor ATCT/TRACON',
          ident: 'BGR',
        },
        {
          name: 'Burlington ATCT/TRACON',
          ident: 'BTV',
        },
        {
          name: 'Cape TRACON',
          ident: 'K90',
        },
        {
          name: 'Providence ATCT/TRACON',
          ident: 'PVD',
        },
        {
          name: 'Syracuse ATCT/TRACON',
          ident: 'SYR',
        },
        {
          name: 'Bradley TRACON',
          ident: 'Y90',
        },
      ],
      [
        {
          name: 'Washington ARTCC',
          ident: 'ZDC',
        },
      ],
      [
        {
          name: 'Denver ARTCC',
          ident: 'ZDV',
        },
        {
          name: 'Denver TRACON',
          ident: 'D01',
        },
      ],
      [
        {
          name: 'Fort Worth ARTCC',
          ident: 'ZFW',
        },
        {
          name: 'Dallas Ft. Worth TRACON',
          ident: 'D10',
        },
      ],
      [
        {
          name: 'Houston ARTCC',
          ident: 'ZHU',
        },
        {
          name: 'Houston TRACON',
          ident: 'I90',
        },
        {
          name: 'New Orleans ATCT/TRACON',
          ident: 'MSY',
        },
      ],
      [
        {
          name: 'Indianapolis ARTCC',
          ident: 'ZID',
        },
      ],
      [
        {
          name: 'Jacksonville ARTCC',
          ident: 'ZJX',
        },
        {
          name: 'Central Florida TRACON',
          ident: 'F11',
        },
      ],
      [
        {
          name: 'Kansas City ARTCC',
          ident: 'ZKC',
        },
      ],
      [
        {
          name: 'Los Angeles ARTCC',
          ident: 'ZLA',
        },
      ],
      [
        {
          name: 'Salt Lake City ARTCC',
          ident: 'ZLC',
        },
        {
          name: 'Salt Lake TRACON',
          ident: 'S56',
        },
      ],
      [
        {
          name: 'Miami ARTCC',
          ident: 'ZMA',
        },
      ],
      [
        {
          name: 'Memphis ARTCC',
          ident: 'ZME',
        },
        {
          name: 'Nashville ATCT/TRACON',
          ident: 'BNA',
        },
        {
          name: 'Little Rock ATCT/TRACON',
          ident: 'LIT',
        },
        {
          name: 'Memphis TRACON',
          ident: 'M03',
        },
      ],
      [
        {
          name: 'Minneapolis ARTCC',
          ident: 'ZMP',
        },
        {
          name: 'Minneapolis TRACON',
          ident: 'M98',
        },
      ],
      [
        {
          name: 'New York ARTCC',
          ident: 'ZNY',
        },
      ],
      [
        {
          name: 'Oakland ARTCC',
          ident: 'ZOA',
        },
        {
          name: 'NorCal Consolidated TRACON',
          ident: 'NCT',
        },
        {
          name: 'NorCal Consolidated TRACON - Reno',
          ident: 'RNO',
        },
      ],
      [
        {
          name: 'Cleveland ARTCC',
          ident: 'ZOB',
        },
      ],
      [
        {
          name: 'Seattle ARTCC',
          ident: 'ZSE',
        },
      ],
      [
        {
          name: 'Atlanta ARTCC',
          ident: 'ZTL',
        },
      ],
    ];
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
                  <Dropdown.Item text="METARs" as="a" target="_blank" href="https://www.aviationweather.gov/metar" />
                  <Dropdown.Item text="TAFs" as="a" target="_blank" href="https://www.aviationweather.gov/taf" />
                  <Dropdown.Item text="PIREPs" as="a" target="_blank" href="https://www.aviationweather.gov/adds/pireps" />
                  <Dropdown.Item text="Baloon Sounding" as="a" target="_blank" href="http://weather.uwyo.edu/upperair/sounding.html" />
                  <Dropdown.Item text="Winds Aloft" as="a" target="_blank" href="http://aviationweather.gov/products/nws/winds/" />
                  <Dropdown.Item text="Graphical Forcasts" as="a" target="_blank" href="http://digital.weather.gov/" />
                  <Dropdown.Item text="Prog Charts" as="a" target="_blank" href="https://www.aviationweather.gov/progchart" />
                  <Dropdown.Item text="Satellite Imagery" as="a" target="_blank" href="https://www.aviationweather.gov/satellite" />
                  <Dropdown.Item text="RADAR" as="a" target="_blank" href="https://www.aviationweather.gov/radar" />
                  <Dropdown.Item text="ASOS/AWOS Stations" as="a" target="_blank" href="https://www.faa.gov/air_traffic/weather/asos/" />
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>

          <TMU facilities={TMUFacilities} />

          <Dropdown simple item text="Support">
            <Dropdown.Menu>
              <Dropdown.Item text="Knwoledgebase/FAQ" />
              <Dropdown.Item text="Open New Ticket" />
              <Dropdown.Item text="My Tickets" />
              <Dropdown item text="Ticket Manager">
                <Dropdown.Menu>
                  <Dropdown.Item text="My Assigned Tickets" />
                  <Dropdown.Item text="Open Tickets" />
                  <Dropdown.Item text="Closed Tickets" />
                  <Dropdown.Item text="Search Tickets" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item text="Knwoledgebase Editor" />
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position="right">

            <Dropdown simple item text="My VATUSA">
              <Dropdown.Menu>
                <Dropdown.Item text="Profile" />
                <Dropdown.Item text="Why can I not join a facility?" />
                <Dropdown.Item text="Transfer Request" />
                <Dropdown.Item text="Exam Center" />
                <Dropdown.Item text="Computer Based Training (CBT)" />
                <Dropdown.Divider />
                <Dropdown.Item text="Logout" />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown simple item text="Actions">
              <Dropdown.Menu>
                <Dropdown.Item text="Facility Mangement" />
                <Dropdown.Item text="Member Mangement" />
                <Dropdown.Item text="TMU Map Mangement" />
                <Dropdown.Item text="Exam Mangement" />
                <Dropdown.Item text="CBT Editor" />
                <Dropdown.Item text="Email Mangement" />
                <Dropdown.Item text="Training Chceklist Mangement" />
                <Dropdown.Item text="ACE Team Mangement" />
                <Dropdown.Item text="Divisin Staff Mangement" />
                <Dropdown.Item text="Submit Transfer Request" />
                <Dropdown.Item text="Division Statistics" />
                <Dropdown.Item text="Solo Certifications" />
              </Dropdown.Menu>
            </Dropdown>

          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
