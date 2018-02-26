import React from 'react';
import {
  Segment,
  Grid, Dropdown,
} from 'semantic-ui-react';
import Facilities from '../components/FacilitiesList';

export default class DivisionMembers extends React.PureComponent {
  render() {
    return (
      <Segment basic>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Dropdown item text="Facilities">
                <Dropdown.Menu>
                  <Facilities />
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
