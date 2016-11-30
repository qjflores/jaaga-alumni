import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import './../../css/Account.css';

export class Account extends Component {
  render() {
    return (
      <div className="Account">
        <Grid>
          <Row>
            <h2>Login</h2>
          </Row>
          <Row>
            <div id="txtError" className="error-message"></div>
          </Row>
          <Row>
            <Col md={3} mdOffset={3}>
            <div className="email-label">Email
            <input id="txtEmail" type="email" className="email-input" placeholder="Email"></input>
            </div>
            </Col>
          </Row>
          <Row>
            <div className="password-label">
            Password
            <input id="txtPassword" type="Password" className="password-input" placeholder="Password"></input>
            </div>
          </Row>
          <Row>
            <Col>
              <div className="login-button" onClick={this.props.login}>
                Login
              </div>
            </Col>
            <Col>
              <div className="signup-button" onClick={this.props.signup}>
                Signup
              </div>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default Account;
