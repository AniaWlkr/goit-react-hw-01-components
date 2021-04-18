import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={[styles.statList, 'list'].join(' ')}>
        {stats.map(statsItem => {
          const { id, label, percentage } = statsItem;
          const bgcolorRandom =
            '#' + Math.floor(Math.random() * 16777216).toString(16);
          return (
            <li
              key={id}
              className={styles.item}
              style={{ backgroundColor: `${bgcolorRandom}` }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ),
};

Statistics.defaultProps = {
  percentage: 0,
};

export default Statistics;
