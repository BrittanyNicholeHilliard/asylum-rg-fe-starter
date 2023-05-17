import React, {useEffect}  from 'react';
import '../../../styles/styles.css';
import { useAuth0 } from '@auth0/auth0-react';


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture,  email_verified, nickname, sub, updated_at } = user;

console.log({user});

  return (
    <div>
        <div className="profile-header">
          <div><img
            src={picture}
            alt="ProfilePicture"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
          </div>
          <div className="profile-name-">
            <h2>{nickname}</h2>
           <p> {name} - Verified: {email_verified.toString()} </p>
           <p> Sub: {sub}</p>
           <p> Last Updated: {updated_at}</p>
          </div>
        </div>
    </div>
  );
};

export default Profile;