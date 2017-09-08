import React, { Component, PropTypes } from 'react';
import { Icon } from 'semantic-ui-react';

class UserBlob extends Component {
  render() {
    const { name, cid, rating, position } = this.props;
    return (
      <div className="wb-usr-wrapper">
        <div className="wb-usr">
          <span className="grab">{name}</span><br />
          <small>
            <Icon name="user" />{cid} &nbsp; — &nbsp;
            <Icon name="trophy" />{`${rating.short} (${rating.long})`}
            <br />
            <Icon name="star" />{`${position.title} - ${position.facility}`}
          </small>
        </div>
      </div>
    );
  }
}

UserBlob.propTypes = {
  name: PropTypes.string.isRequired,
  cid: PropTypes.number.isRequired,
  rating: PropTypes.shape({
    short: PropTypes.string,
    long: PropTypes.string,
  }).isRequired,
  position: PropTypes.shape({
    title: PropTypes.string,
    facility: PropTypes.string,
  }).isRequired,
};

export default UserBlob;
