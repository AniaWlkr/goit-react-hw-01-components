import React from 'react';
import UserDescr from '../UserDescr/UserDescr';
import UserStats from '../UserStats/UserStats';
import styles from './UserProfile.module.css';

const UserProfile = ({ user }) => {
  const { avatar, name, tag, location, stats } = user;
  return (
    <div className={styles.profile}>
      <UserDescr avatar={avatar} name={name} tag={tag} location={location} />
      <UserStats stats={stats} />
    </div>
  );
};

export default UserProfile;
