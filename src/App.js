import React, { useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

// react-assignment-5-users-management-app-2
const url = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const { data, isLoading, error, setData } = useFetch(url);
  // eslint-disable-next-line no-unused-vars
  const [usersCopy, setUsersCopy] = useState(data);
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filteredUsers = data && data.filter((user) => user.id != id);
    setData(filteredUsers);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    const searchData =
      data &&
      data.filter((user) => {
        const userName = user.name.toLowerCase();
        return userName.startsWith(value);
      });
    setData(searchData);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {data && <Users users={data} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
