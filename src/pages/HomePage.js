import React from 'react';
import {
  Segment,
  Grid, Container,
} from 'semantic-ui-react';
import Events from '../components/EventsList';
import News from '../components/NewsList';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Segment basic>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <News />
              </Grid.Column>
              <Grid.Column width={8}>
                <Events />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
