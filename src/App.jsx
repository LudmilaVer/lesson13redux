import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Список пользователей</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;