import React from 'react';
import { Icon } from 'semantic-ui-react';

export default class UserBlob extends React.Component {
  render() {
    return (
      <div className="right wb-usr">
        <span className="grab">User Blob</span><br />
        <small>
          <Icon name="user" />799999 - <Icon name="trophy" />C1 (Controller)<br />
          <Icon name="star" />Staff - VATUSA
        </small>
      </div>
    );
  }
}
