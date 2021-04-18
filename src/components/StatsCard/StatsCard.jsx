import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatsCard.module.css';

const StatsLabel = ({ label, value = 0 }) => {
  return (
    <li className={styles.statsCard}>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{value}</span>
    </li>
  );
};

StatsLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default StatsLabel;
