import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { fetchFacilities } from '../../ducks/facilities';

class FacilitiesList extends React.Component {
  componentDidMount() {
    this.props.fetchFacilities();
  }

  render() {
    const { facilities } = this.props;
    return facilities.map(facility => (
      <Dropdown.Item href={facility.url} target="_blank">{facility.id} - {facility.name}</Dropdown.Item>
    ));
  }
}

FacilitiesList.propTypes = {
  fetchFacilities: PropTypes.func.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    region: PropTypes.number,
  })),
};

FacilitiesList.defaultProps = {
  facilities: [],
};

const mapStateToProps = state => ({
  facilities: state.facilities.list,
});

const mapDispatchToProps = {
  fetchFacilities,
};

export default connect(mapStateToProps, mapDispatchToProps)(FacilitiesList);
