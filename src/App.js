/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import useFetch from './hook/useFetch';

import Search from './components/Search';
import Users from './components/Users';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [users, setUsers] = useState([]);
  const [usersCopy, setUsersCopy] = useState([]);

  const errorMessage = 'loading is not successfull';

  useEffect(() => {
    data && setUsers(data);
    setUsersCopy(data);
  }, [data]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsersCopy(newUsers);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    let searchValue = searchText.toLowerCase();
    const searchNewUsers = users.filter((user) => {
      const searchName = user.name.toLowerCase();
      return searchName.startsWith(searchValue);
    });
    setUsersCopy(searchNewUsers);
  };
  console.log(usersCopy);
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{errorMessage}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {usersCopy && users.length >= 1 && (
        <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />
      )}
    </div>
  );
};

export default App;
