import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import MainMenu from './MainMenu';

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
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={ this.showFixedMenu }
          onBottomVisible={ this.hideFixedMenu }
          once={ false }
        >
          <Segment
            inverted
            textAlign="center"
            style={ { minHeight: 400, padding: '1em 0em' } }
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <MainMenu />
              </Menu>
            </Container>

            <Container text>
              <Header
                as="h1"
                content="VATUSA"
                inverted
                style={ {
 fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em',
} }
              />
            </Container>
          </Segment>
        </Visibility>

        <Segment style={ { padding: '8em 0em' } } vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={ 8 }>
                <Header as="h3" style={ { fontSize: '2em' } }>We Help Companies and Companions</Header>
                <p style={ { fontSize: '1.33em' } }>
                  We can give your company superpowers to do things that they never thought
                  possible. Let us delight
                  your customers and empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={ { fontSize: '2em' } }>We Make Bananas That Can Dance</Header>
                <p style={ { fontSize: '1.33em' } }>
                  Yes thats right, you thought it was the stuff of dreams,
                  but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={ 6 }>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="/assets/images/wireframe/white-image.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={ { padding: '0em' } } vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={ { paddingBottom: '5em', paddingTop: '5em' } }>
                <Header as="h3" style={ { fontSize: '2em' } }>What a Company</Header>
                <p style={ { fontSize: '1.33em' } }>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={ { paddingBottom: '5em', paddingTop: '5em' } }>
                <Header as="h3" style={ { fontSize: '2em' } }>I shouldnt have gone with their competitor.</Header>
                <p style={ { fontSize: '1.33em' } }>
                  <Image avatar src="/assets/images/avatar/large/nan.jpg" />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={ { padding: '8em 0em' } } vertical>
          <Container text>
            <Header as="h3" style={ { fontSize: '2em' } }>Breaking The Grid, Grabs Your Attention</Header>
            <p style={ { fontSize: '1.33em' } }>
              Instead of focusing on content creation and hard work,
              we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace
              and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as="a" size="large">Read More</Button>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={ { margin: '3em 0em', textTransform: 'uppercase' } }
            >
              <a href="#test">Case Studies</a>
            </Divider>
            <Header as="h3" style={ { fontSize: '2em' } }>Did We Tell You About Our Bananas?</Header>
            <p style={ { fontSize: '1.33em' } }>
              Yes I know you probably disregarded the earlier
              boasts as non-sequitur filler content, but its really
              true.
              It took years of gene splicing and combinatory
              DNA research, but our bananas can really dance.
            </p>
            <Button as="a" size="large">Im Still Quite Interested</Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={ { padding: '5em 0em' } }>
          <Container text>
            <p>Copyright &copy; 2016-2017 VATUSA - United States Division, VATSIM.
              All rights reserved.
              Any and all content on this website are for use with the
              Virtual Air Traffic Simulation Network (VATSIM)
              and may not be used for real-world navigation or aviation purposes
              and doing so could be a violation of federal law.
            </p>
          </Container>
        </Segment>
      </div>
    );
  }
}
