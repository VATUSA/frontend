import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Table } from 'semantic-ui-react';
import { fetchStaff } from '../../ducks/divStaff';

class DivisionStaff extends React.Component {
  componentDidMount() {
    this.props.fetchStaff();
  }

  render() {
    const { staff } = this.props;
    return (
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Position Description</Table.HeaderCell>
            <Table.HeaderCell>&nbsp;</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>US1</Table.Cell>
            <Table.Cell>{staff.us1.fname} {staff.us1.lname}</Table.Cell>
            <Table.Cell>Division Director</Table.Cell>
            <Table.Cell><a href="mailto:vatusa1@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US2</Table.Cell>
            <Table.Cell>{staff.us2.fname} {staff.us2.lname}</Table.Cell>
            <Table.Cell>Deputy Division Director</Table.Cell>
            <Table.Cell><a href="mailto:vatusa2@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US3</Table.Cell>
            <Table.Cell>{staff.us3.fname} {staff.us3.lname}</Table.Cell>
            <Table.Cell>Training Director</Table.Cell>
            <Table.Cell><a href="mailto:vatusa3@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US4</Table.Cell>
            <Table.Cell>{staff.us4.fname} {staff.us4.lname}</Table.Cell>
            <Table.Cell>Division Conflict Resolution Manager</Table.Cell>
            <Table.Cell><a href="mailto:vatusa4@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US5</Table.Cell>
            <Table.Cell>{staff.us5.fname} {staff.us5.lname}</Table.Cell>
            <Table.Cell>Events Manager/VA Liaison</Table.Cell>
            <Table.Cell><a href="mailto:vatusa5@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US6</Table.Cell>
            <Table.Cell>{staff.us6.fname} {staff.us6.lname}</Table.Cell>
            <Table.Cell>Data Services Manager</Table.Cell>
            <Table.Cell><a href="mailto:vatusa6@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US7</Table.Cell>
            <Table.Cell>{staff.us7.fname} {staff.us7.lname}</Table.Cell>
            <Table.Cell>Western Regional Air Traffic Director</Table.Cell>
            <Table.Cell><a href="mailto:vatusa7@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US8</Table.Cell>
            <Table.Cell>{staff.us8.fname} {staff.us8.lname}</Table.Cell>
            <Table.Cell>Southern Regional Air Traffic Director</Table.Cell>
            <Table.Cell><a href="mailto:vatusa8@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US9</Table.Cell>
            <Table.Cell>{staff.us9.fname} {staff.us9.lname}</Table.Cell>
            <Table.Cell>Northeastern Regional Air Traffic Director</Table.Cell>
            <Table.Cell><a href="mailto:vatusa9@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US11</Table.Cell>
            <Table.Cell>{staff.us11.fname} {staff.us11.lname}</Table.Cell>
            <Table.Cell>Division Director Emeritus</Table.Cell>
            <Table.Cell>N/A</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>US12</Table.Cell>
            <Table.Cell>{staff.us12.fname} {staff.us12.lname}</Table.Cell>
            <Table.Cell>Senior Web Developer</Table.Cell>
            <Table.Cell><a href="mailto:vatusa12@vatusa.net"><Icon fitted name="mail" /></a></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

DivisionStaff.checkPropTypes = {
  fetchStaff: PropTypes.func.isRequired,
  staff: PropTypes.shape({
    us1: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us2: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us3: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us4: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us5: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us6: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us7: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us8: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us9: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us11: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
    us12: PropTypes.shape({
      cid: PropTypes.number,
      lname: PropTypes.string,
      fname: PropTypes.string,
    }),
  }),
};

DivisionStaff.defaultProps = {
  staff: {},
};

const mapStateToProps = state => ({
  staff: state.staff,
});

const mapDispatchToProps = {
  fetchStaff,
};

export default connect(mapStateToProps, mapDispatchToProps)(DivisionStaff);
