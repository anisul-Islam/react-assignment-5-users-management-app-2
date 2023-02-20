/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import CustomHook from './components/CustomHook';

import Search from './components/Search';
import Users from './components/Users';

const App = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const { users, error, isLoading } = CustomHook(url);
  // get data, error, isLoading states from custom hook here

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    if (users) {
      setNewUsers(users);
    }
  }, [users]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const newValue = newUsers.filter((user) => user.id !== id);
    setNewUsers(newValue);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const newSearch = users.filter((user) => {
      const name = user.name.toLowerCase();
      return name.startsWith(searchText);
    });
    setNewUsers(newSearch);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p style={{ color: 'yellow' }}>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      {<Search onHandleSearch={handleSearch} />}
      {newUsers && <Users users={newUsers} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
