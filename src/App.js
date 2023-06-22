import React, { useEffect, useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = (props) => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [usersCopy, setUsersCopy] = useState(data);
  useEffect(() => {
    setUsersCopy(data);
  }, [data]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filter = usersCopy.filter((user) => user.id != id);
    setUsersCopy(filter);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    const newUsers = usersCopy.filter((user) => {
      const userName = user.name.toLowerCase();
      return userName.startsWith(value);
    });

    setUsersCopy(newUsers);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {usersCopy && <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
