import React, { Component } from 'react';

export class EditProfile extends Component {
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
			EditProfile
			)
	}
}

export default EditProfile;