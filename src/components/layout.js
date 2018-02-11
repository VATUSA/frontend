import React, { Component } from 'react';
import {
  Container,
  Header,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import HomePage from '../pages/HomePage';

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <MainMenu />
  </Menu>
);

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state;

    return (
      <BrowserRouter>
        <div>
          { visible ? <FixedMenu /> : null }

          <Visibility
            onBottomPassed={this.showFixedMenu}
            onBottomVisible={this.hideFixedMenu}
            once={false}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 300, padding: '0em 0em' }}
              vertical
            >

              <Menu inverted borderless stackable size="large">
                <MainMenu />
              </Menu>

              <Container text>
                <Header
                  as="h1"
                  content="VATUSA"
                  inverted
                  style={{
                    fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0.5em',
                  }}
                />
              </Container>
            </Segment>
          </Visibility>

          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
