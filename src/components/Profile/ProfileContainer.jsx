import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 16907;
    };
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };

  render() {
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    );
  };
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
