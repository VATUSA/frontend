import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Disclaimer from '../Disclaimer/Disclaimer';
import Version from '../Version/Version';
import style from './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Divider className={style.divider} />
        <Disclaimer />
        <Version />
      </Container>
    );
  }
}
