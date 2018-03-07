import React from 'react';
import {
  Segment,
  Grid, Dropdown, Tab, Container,
} from 'semantic-ui-react';
import ARTCCMembers from '../../components/ARTCCMembers';
import DivisionStaff from '../../components/DivisionStaff';

export default class Members extends React.PureComponent {
  panes = [
    { menuItem: 'Division Staff', render: () => <Tab.Pane><DivisionStaff /></Tab.Pane> },
    { menuItem: 'ARTCC Members', render: () => <Tab.Pane><ARTCCMembers /></Tab.Pane> },
  ];

  render() {
    return (
      <Container>
        <Segment basic>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Tab panes={this.panes} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
