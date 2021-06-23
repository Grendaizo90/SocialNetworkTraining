import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
