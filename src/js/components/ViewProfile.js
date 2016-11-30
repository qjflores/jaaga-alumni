import React, { Component } from 'react';

export class ViewProfile extends Component {
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
      <div className="ViewProfile">
      ViewProfile
      </div>
      )
  }
}

export default ViewProfile;