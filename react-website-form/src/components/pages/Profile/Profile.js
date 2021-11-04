import { useState, useEffect } from "react";
import profileService from "../../../services/profileService.js";

import "./Profile.css";

function Profile() {
  const [profileState, setProfileState] = useState([]);

  useEffect(() => {
    const profileData = profileService.retrive();
    if (profileData) {
      setProfileState(profileData);
    }
  }, []);

  return (
    <div className='profile-container'>
      <h1 className='profile-title'>My Profile</h1>
      <div className='section-container'>
        <div className='profile-image'>
          <img
            src={
              profileState.src
                ? profileState.src
                : "images/avatar-svgrepo-com.svg"
            }
            alt='avatar'
          />
        </div>
        <div className='profile-content'>
          <p>First Name: {profileState.firstName}</p>
          <p>Last Name: {profileState.lastName}</p>
          <p>Email: {profileState.email}</p>
          <p>Phone: {profileState.phone}</p>
          <p>Birthday: {profileState.birthday}</p>
          <p>About me: {profileState.about}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
