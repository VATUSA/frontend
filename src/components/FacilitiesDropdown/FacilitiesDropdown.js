import React, { Component, PropTypes } from 'react';
import { Dropdown } from 'semantic-ui-react';

class FacilitiesDropdown extends Component {
  renderDropdownMenu() {
    const { facilities } = this.props;
    return facilities.map(facility => (<Dropdown.Item
      text={facility.name}
      as="a"
      target="_blank"
      href={facility.link}
    />),
    );
  }

  render() {
    return (
      <Dropdown simple item text="Facilities">
        <Dropdown.Menu>
          {this.renderDropdownMenu()}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

FacilitiesDropdown.propTypes = {
  facilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default FacilitiesDropdown;
