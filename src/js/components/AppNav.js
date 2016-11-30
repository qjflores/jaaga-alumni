import React, { Component } from 'react';

import {EditProfile} from './EditProfile'
import {BrowseAlumni} from './BrowseAlumni'
import {ViewProfile} from './ViewProfile'
import {Projects} from './Projects'
import {AlumniNavigator} from './AlumniNavigator'

export class AppNav extends Component {
	constructor() {
		super();
		this.state = {
			isEditProfileVisible: false,
			isBrowseAlumniVisible: false,
			isViewProfileVisible: false,
			isProjectsVisible: false,
		}
		this.clickProjects = this.clickProjects.bind(this);
		this.clickBrowseAlumni = this.clickBrowseAlumni.bind(this);
		this.clickEditProfile = this.clickEditProfile.bind(this);
	}

	componentWillMount() {
		this.setState({
			isEditProfileVisible: false,
			isBrowseAlumniVisible: false,
			isViewProfileVisible: false,
			isProjectsVisible: false,
		});
	}

	clickBrowseAlumni() {
		this.setState({
			isEditProfileVisible: false,
			isBrowseAlumniVisible: true,
			isViewProfileVisible: false,
			isProjectsVisible: false,
		});	
	}

	clickProjects() {
		this.setState({
			isEditProfileVisible: false,
			isBrowseAlumniVisible: false,
			isViewProfileVisible: false,
			isProjectsVisible: true,
		});		
	}

	clickEditProfile() {
		this.setState({
			isEditProfileVisible: true,
			isBrowseAlumniVisible: false,
			isViewProfileVisible: false,
			isProjectsVisible: false,
		});		
	}

  render() {
    return (
      <div className="AppNav">
      	<AlumniNavigator user={this.props.user} logout={this.props.logout}/>
      	{this.state.isEditProfileVisible ? <EditProfile user={this.props.user} clickEditProfile={this.clickEditProfile}/> : null}
      	{this.state.isBrowseAlumniVisible ? <BrowseAlumni user={this.props.user} clickBrowseAlumni={this.clickBrowseAlumni}/> : null}
      	{this.state.isViewProfileVisible ? <ViewProfile user={this.props.user}/> : null}
      	{this.state.isProjectsVisible ? <Projects user={this.props.user} clickProjects={this.clickProjects}/> : null}
      </div>
    );
  }
}

export default AppNav;
