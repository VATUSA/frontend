import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Feed } from 'semantic-ui-react';
import { fetchFacilities } from '../../ducks/facilities';

class FacilitiesList extends React.Component {
  componentDidMount() {
    this.props.fetchFacilities();
  }

  renderFacilitiesList() {
    const { facilities } = this.props;
    return facilities.map(facility => (
      <Feed.Event>
        <Feed.Label icon="building" />
        <Feed.Content>
          <Feed.Summary>{facility.name}</Feed.Summary>
        </Feed.Content>
      </Feed.Event>));
  }

  render() {
    return (
      <Card centered fluid>
        <Card.Content>
          <Card.Header>
            Facilities
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            {this.renderFacilitiesList()}
          </Feed>
        </Card.Content>
      </Card>
    );
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
