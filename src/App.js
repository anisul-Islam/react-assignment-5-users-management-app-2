import React, { useEffect, useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  const {
    data,
    loading: isLoading,
    error
  } = useFetch('https://jsonplaceholder.typicode.com/users');
  const [usersCopy, setusersCopy] = useState(data);
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    if (data.length > 1) {
      setusersCopy(data);
    }
  }, [data]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    // this is for deep cloning the state
    setusersCopy((users) => {
      return users.filter((user) => user.id !== id);
    });
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const users = JSON.parse(JSON.stringify(data));
    // this for deep cloning the state
    if (searchText) {
      const filterdUser = users.filter((user) => user.name.includes(searchText));
      setusersCopy(filterdUser);
    } else {
      console.log(users);
      setusersCopy(data);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
