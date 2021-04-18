import React from 'react';
import StatsLabel from '../StatsCard/StatsCard';
import styles from './UserStats.module.css';

const UserStats = ({ stats }) => {
  return (
    <ul className={[styles.stats, 'list'].join(' ')}>
      {Object.entries(stats).map(entry => {
        return <StatsLabel key={entry[0]} label={entry[0]} value={entry[1]} />;
      })}
    </ul>
  );
};

export default UserStats;
