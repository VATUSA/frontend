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

          <Dropdown simple item text="TMU Maps">
            <Dropdown.Menu>
              {/* This needs to be replaced with an API call */}
              <Dropdown.Item text="HCF - Honolulu Control Facility" />
              <Dropdown.Item text="ZAB - Albuquerque ARTCC" />
              <Dropdown.Item text="ZAN - Anchorage ARTCC" />
              <Dropdown item text="ZAU - Chicago ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZAU - Chicago ARTCC" />
                  <Dropdown.Item text="C90 - Chicago Tracon" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="ZBW - Boston ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZBW - Boston ARTCC" />
                  <Dropdown.Item text="A90 - Boston Consolidated TRACON" />
                  <Dropdown.Item text="ALB - ALbany ATCT/TRACON" />
                  <Dropdown.Item text="BGR - Bangor ATCT/TRACON" />
                  <Dropdown.Item text="BTV - Burlington ATCT/TRACON" />
                  <Dropdown.Item text="K90 - Cape TRACON" />
                  <Dropdown.Item text="PVD - Providence ATCT/TRACON" />
                  <Dropdown.Item text="PWM - Portland ATCT/TRACON" />
                  <Dropdown.Item text="SYR - Syracuse ATCT/TRACON" />
                  <Dropdown.Item text="Y90 - Bradley TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item text="ZDC - Washington ARTCC" />
              <Dropdown item text="ZDV - Denver ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZDV - Denver ARTCC" />
                  <Dropdown.Item text="D01 - Denver TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="ZFW - Fort Worth ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZFW - Fort Worth ARTCC" />
                  <Dropdown.Item text="D10 - Dallas - Ft Worth TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="ZHU - ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZHU -  ARTCC" />
                  <Dropdown.Item text="I90 - Houston TRACON" />
                  <Dropdown.Item text="MSY - New Orleans ATCT/TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item text="ZID - Indianapolis ARTCC" />
              <Dropdown item text="ZJX - Jacksonville ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZJX - Jacksonville ARTCC" />
                  <Dropdown.Item text="F11 - Central Florida TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="ZKC - Kansas City ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZKC - Kansas City ARTCC" />
                  <Dropdown.Item text="ICT - Wichita ATCT/TRACON" />
                  <Dropdown.Item text="MCI - Kansas City ATCT/TRACON" />
                  <Dropdown.Item text="T75 - St. Louis TRACON" />
                  <Dropdown.Item text="TUL - Tulsa ATCT/TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item text="ZLA - Los Angeles ARTCC" />
              <Dropdown item text="ZLC - Salt Lake City ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZLC - Salt Lake City ARTCC" />
                  <Dropdown.Item text="S56 - Salt lake TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item text="ZMA - Miami ARTCC" />
              <Dropdown item text="ZME - Memphis ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZME - Memphis ARTCC" />
                  <Dropdown.Item text="BNA - Nashville ATCT/TRACON" />
                  <Dropdown.Item text="LIT - Litle Rock ATCT/TRACON" />
                  <Dropdown.Item text="M03 - Memphis TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="ZMP - Minneapolis ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZMP - Minneapolis ARTCC" />
                  <Dropdown.Item text="M98 - Minneapolis TRACON" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item text="ZNY - New York ARTCC" />
              <Dropdown item text="ZOA - Oakland ARTCC">
                <Dropdown.Menu>
                  <Dropdown.Item text="ZOA - Oakland ARTCC" />
                  <Dropdown.Item text="NCT - NorCal Consolidated TRACON" />
                  <Dropdown.Item text="RNO - NorCal Consolidated TRACON - Reno" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item text="ZOB - Cleveland ARTCC" />
              <Dropdown.Item text="ZSE - Seattle ARTCC" />
              <Dropdown.Item text="ZTL - Atlanta ARTCC" />
            </Dropdown.Menu>
          </Dropdown>

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
