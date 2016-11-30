import React, { Component } from 'react';

export class Projects extends Component {
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
			<div className="Projects">
			Projects
			</div>
			)
	}
}

export default Projects;