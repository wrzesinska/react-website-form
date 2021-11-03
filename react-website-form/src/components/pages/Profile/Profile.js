import { useState, useEffect } from "react";

import "./Profile.css";

function Profile() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  const data = {
    firstName: items.map((item) => item.firstName),
    lastName: items.map((item) => item.lastName),
    email: items.map((item) => item.email),
    phone: items.map((item) => item.phone),
    birthday: items.map((item) => item.birthday),
    about: items.map((item) => item.about),
    src: items.map((item) => item.src),
  };

  const birthdayFormatted = data.birthday.toString().split("T")[0];

  return (
    <div className='profile-container'>
      <h1 className='profile-title'>My Profile</h1>
      <div className='section-container'>
        <div className='profile-image'>
          <img
            src={data.src ? data.src : "images/avatar-svgrepo-com.svg"}
            alt='avatar'
          />
        </div>
        <div className='profile-content'>
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Birthday: {birthdayFormatted}</p>
          <p>About me: {data.about}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
