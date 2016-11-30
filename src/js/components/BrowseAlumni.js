import React, { Component } from 'react';

export class BrowseAlumni extends Component {
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
			BrowseAlumni
			)
	}
}

export default BrowseAlumni;