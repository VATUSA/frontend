import React, { PropTypes, Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import TMUItem from './TMUItem';

class TMU extends Component {
  renderDropdown() {
    const { facilities } = this.props;
    return facilities.map(facility => <TMUItem key={facility[0].ident} facility={facility} />);
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
  ).isRequired,
};

export default TMU;
