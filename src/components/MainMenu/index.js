import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Menu, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import logo from '../../static/logo-light.png'; // Light preferred, dark usable

class MainMenu extends React.PureComponent {
  static propTypes = {
    authInfo: PropTypes.shape(),
  }

  static defaultProps = {
    authInfo: null,
  }

  onLoginButtonClick = () => {
    window.location.href = 'https://login.vatusa.net';
  }

  renderLoginButton() {
    const { authInfo } = this.props;

    if (!authInfo) {
      return (
        <Button as="a" primary onClick={this.onLoginButtonClick}>Log in</Button>
      );
    }

    return (
      <span>{`Welcome back ${authInfo.fname}`}</span>
    );
  }

  render() {
    return (
      <Container>
        <Menu.Item><Image size="small" src={logo} /></Menu.Item>
        <Menu.Item as="a" active>Home</Menu.Item>
        <Menu.Item as="a">Facilities</Menu.Item>
        <Menu.Item as="a">Forums</Menu.Item>
        <Menu.Item as="a">Division Info</Menu.Item>
        <Menu.Item as="a">Pilot Tools</Menu.Item>
        <Menu.Item as="a">Join Us</Menu.Item>
        <Menu.Item as="a">TMU Maps</Menu.Item>
        <Menu.Item as="a">Support</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item className="item">
            {this.renderLoginButton()}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  authInfo: state.auth.info,
});

export default connect(mapStateToProps)(MainMenu);
