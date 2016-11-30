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
		console.log("AlumniNavigator.componentWillMount");
		console.log(this.props);
	}

	render() {
		return(
			<Grid>
				<Row>
					<Col md={2} mdOffset={1} >
					<div className="alumni" onClick={this.props.clickBrowseAlumni}>
					Alumni
					</div>
					</Col>
					<Col md={2}>
					<div className="projects" onClick={this.props.clickProjects}>
					Projects
					</div>
					</Col>
					<Col md={2}>
					<div className="edit-profile" onClick={this.props.clickEditProfile}>
					Edit Profile
					</div>
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