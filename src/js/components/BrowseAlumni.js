import React, { Component } from 'react';

import * as firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

export class BrowseAlumni extends Component {
	constructor() {
		super();
		this.state = {
			user: undefined,
			alumniList:[]
		}
	}

	componentWillMount() {
		console.log("BrowseAlumni.componentWillMount")
	}

	componentDidMount() {
		console.log("BrowseAlumni.componentDidMount");
		var ref = firebase.database().ref("users")
		console.log(ref);
		this.bindAsArray(ref, 'alumniList');
	}

	render() {
		console.log("BrowseAlumni.render")
		console.log(this.state)
		var alumni = this.state.alumniList;
		var browseAlumni = alumni.map(function(alum) {
			return <div className="alumni-list" key={alum.key}>{alum.email}</div>
		})
		return(
			<div className="BrowseAlumni">
			BrowseAlumni
			{browseAlumni}
			</div>
			)
	}
}

reactMixin(BrowseAlumni.prototype, ReactFireMixin)

export default BrowseAlumni;