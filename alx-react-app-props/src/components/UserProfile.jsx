import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return <UserInfo />;
}

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
import React from 'react';import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;
}import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f7f7f7' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '8px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ color: '#555', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}
