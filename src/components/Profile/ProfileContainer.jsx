import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    };
    this.props.getUserProfile(userId);
  };

  render() {
    return (
      <Profile {...this.props} />
    );
  };
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
