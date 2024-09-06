
import React, { useContext } from 'react';
import { UserContext } from './UserContext.jsx';

function UserProfile() {
  const userData = useContext(UserContext);

  return <UserDetails userData={userData} />;
}

export default UserProfile;