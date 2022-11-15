import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  const { users, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [usersCopy, setUserCopy] = useState(users);

  useEffect(() => {
    if (users?.length > 1) {
      setUserCopy(users);
    }
  }, [users]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filter = users.filter((user) => user.id !== id);
    setUserCopy(filter);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setUserCopy(filteredData);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      {<Search onHandleSearch={handleSearch} />}
      {users.length > 1 && <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
