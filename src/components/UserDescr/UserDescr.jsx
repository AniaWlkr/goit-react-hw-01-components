import PropTypes from 'prop-types';
import styles from './UserDescr.module.css';
import defaultAvatar from '../../images/user.svg';

const UserDescr = ({ avatar, name, tag, location }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

UserDescr.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
};

UserDescr.defaultProps = {
  avatar: defaultAvatar,
  location: 'undefined',
};

export default UserDescr;
