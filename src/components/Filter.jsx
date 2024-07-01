import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ addUser }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleAddUser = () => {
    addUser(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        className={styles.filter}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите имя пользователя..."
      />
      <button onClick={handleAddUser}>Добавить</button>
    </div>
  );
};

export default connect(null, { addUser })(Filter);
