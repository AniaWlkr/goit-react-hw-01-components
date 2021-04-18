import React from 'react';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.row}>
          <th className={styles.dataType}>Type</th>
          <th className={styles.data}>Amount</th>
          <th className={styles.data}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.dataType}>{type}</td>
            <td className={styles.data}>{amount}</td>
            <td className={styles.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
