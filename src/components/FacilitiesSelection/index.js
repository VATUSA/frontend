import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchFacilities } from '../../ducks/facilities';

class FacilitiesSelection extends React.Component {
  componentDidMount() {
    this.props.fetchFacilities();
  }

  renderFacilities() {
    const { facilities } = this.props;
    facilities.map(facility => (
      <Dropdown.Item key={facility.id}>{facility.id} - {facility.name}</Dropdown.Item>
    ));
  }

  render() {
    return (
      <Dropdown text="Facilities" simple item>
        <Dropdown.Menu>
          {this.renderFacilities()}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

FacilitiesSelection.propTypes = {
  fetchFacilities: PropTypes.func.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    region: PropTypes.number,
  })),
};

FacilitiesSelection.defaultProps = {
  facilities: [],
};

const mapStateToProps = state => ({
  facilities: state.facilities.list,
});

const mapDispatchToProps = {
  fetchFacilities,
};

export default connect(mapStateToProps, mapDispatchToProps)(FacilitiesSelection);
