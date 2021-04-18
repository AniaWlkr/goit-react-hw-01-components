import styles from './App.module.css';
import user from '../../data/user.json';
import UserProfile from '../UserProfile/UserProfile';
import statsData from '../../data/statistical-data.json';
import Statistics from '../Statistics/Statistics';
import friends from '../../data/friends.json';
import FriendsList from '../FriendList/FriendList';
import transactions from '../../data/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className={styles.container}>
      <UserProfile user={user} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
