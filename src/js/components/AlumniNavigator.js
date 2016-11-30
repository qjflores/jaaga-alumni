import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

export class AlumniNavigator extends Component {
	constructor() {
		super();
		this.state = {
			user: undefined
		}
	}

	componentWillMount() {
		this.setState({
			user: this.props.user
		})
	}

	render() {
		return(
			<Grid>
				<Row>
					<Col md={2} mdOffset={1}>
					View Alumni
					</Col>
					<Col md={2}>
					Projects
					</Col>
					<Col md={2}>
					Edit Profile
					</Col>
					<Col md={2}>
					<div className="logout" onClick={this.props.logout}>
						Logout
					</div>
					</Col>
				</Row>
			</Grid>
			)
	}
}

export default AlumniNavigator;