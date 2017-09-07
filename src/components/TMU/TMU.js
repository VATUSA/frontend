import React, { PropTypes, Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import TMUItem from './TMUItem';

class TMU extends Component {
  renderDropdown() {
    const { facilities } = this.props;
    return facilities.map(facility => <TMUItem facility={facility} />);
  }

  render() {
    return (
      <Dropdown simple item text="TMU Maps">
        <Dropdown.Menu>
          {this.renderDropdown()}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

TMU.propTypes = {
  facilities: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        ident: PropTypes.string,
      }),
    ),
  ),
};

TMU.defaultProps = {
  facilities: [
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
    ],
    [
      {
        name: 'Boston ARTCC',
        ident: 'ZBW',
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
    ],
    [
      {
        name: 'Fort Worth ARTCC',
        ident: 'ZFW',
      },
    ],
    [
      {
        name: 'Houston ARTCC',
        ident: 'ZHU',
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
    ],
    [
      {
        name: 'Minneapolis ARTCC',
        ident: 'ZMP',
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
  ],
};

export default TMU;
