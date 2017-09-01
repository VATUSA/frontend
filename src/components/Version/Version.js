import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <p>
        RepoName-releaseTag-hash (commit-date)
      </p>
    );
  }
}
