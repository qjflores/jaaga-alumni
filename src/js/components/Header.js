import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import logo from './../../img/logo.png'
import profilepic from './../../img/defaultprofilepic.png'

import './../../css/Header.css';

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Grid>
        <Row className="header-row">
          <Col sm={6} md={2}>
            <div className="logo">
              <img src={logo} className="logo" alt="logo" />
            </div> 
          </Col>
          <Col sm={6} md={2} mdOffset={1}>
            <div className="title">Jaaga Fellowship</div>
          </Col>
          <Col sm={6} md={2} >
            <div className="homeurl">Jaaga Home</div>
          </Col>
          <Col sm={6} md={2}>
            <div className="displayname">Name</div>
          </Col>
          <Col sm={6} md={2}>
            <img src={profilepic} className="profilepic" alt="profilepic" />
          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default Header;
