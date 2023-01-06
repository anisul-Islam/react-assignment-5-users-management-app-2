/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {

  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  const { users, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');
  // use url: 'https://jsonplaceholder.typicode.com/users'
  // Task 3: delete user
  // get the id from User.js

  const [usersCopy, setUsersCopy] = useState(users);

  useEffect(()=>{
    setUsersCopy(users);
  }, [users]);

  const handleDeleteUser = (id) => {
   const filterUser = usersCopy.filter((user)=> user.id !== id);
   setUsersCopy(filterUser); 
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    let value = searchText.toLowerCase();
    const searchUser = users.filter((user)=>{
      const newUser = user.name.toLowerCase();
      return newUser.startsWith(value);
    })
    setUsersCopy(searchUser)
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {users.length > 1 && <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
