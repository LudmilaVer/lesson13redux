import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import styles from '../styles/UserList.module.css';

const UserList = ({ users }) => {
  return (
    <div className={styles.userList}>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);
