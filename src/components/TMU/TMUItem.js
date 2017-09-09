import React, { Component, PropTypes } from 'react';
import { Dropdown } from 'semantic-ui-react';

class TMUItem extends Component {
  static singleSector(dropdownTitle) {
    return <Dropdown.Item text={dropdownTitle} />;
  }

  static multipleSectors(dropdownTitle, facility) {
    return (
      <Dropdown item text={dropdownTitle}>
        <Dropdown.Menu>
          {facility.map(sector => <Dropdown.Item key={sector.ident} text={`${sector.ident} - ${sector.name}`} />)}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  renderItem() {
    const { facility } = this.props;
    const dropdownTitle = `${facility[0].ident} - ${facility[0].name}`;
    if (facility.length === 1) {
      return TMUItem.singleSector(dropdownTitle);
    } else if (facility.length > 1) {
      return TMUItem.multipleSectors(dropdownTitle, facility);
    }
    return null;
  }
  render() {
    return this.renderItem();
  }
}

TMUItem.propTypes = {
  facility: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      ident: PropTypes.string,
    }),
  ).isRequired,
};

export default TMUItem;
