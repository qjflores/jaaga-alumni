import React, { Component } from 'react';

export class AppNav extends Component {
	constructor() {
		super();
		this.state = {
			isEditProfileVisible: false,
			isBrowseAlumniVisible: false,
			isViewProfileVisible: false,
			isProjectsVisible: false,
		}
	}

  render() {
    return (
      <div className="AppNav">
      	<Navigator user={this.props.user}/>
      	{isEditProfileVisible ? <EditProfile/> : null}
      	{isBrowseAlumniVisible ? <BrowseAlumni/> : null}
      	{isViewProfileVisible ? <ViewProfile/> : null}
      	{isProjectsVisible ? <Projects/> : null}
      </div>
    );
  }
}

export default AppNav;
