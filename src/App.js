import React, {useState, useMemo } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  const {users,isLoading,error}=useFetch('https://jsonplaceholder.typicode.com/users')
  const [newUser,setNewUser]=useState([])
  useMemo(()=>{setNewUser(users)},[users])
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  // const=useFetch('https://jsonplaceholder.typicode.com/users')
  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    setNewUser((oldUser)=>{
      const filterUser=oldUser.filter((user)=>user.id!=id)
      return filterUser
    })
  };

  // Task 4: search user
  // get the text from Search.js
  // const handleSearch = (searchText) => {};

  return (
    <div className="container">
      <h1>hi</h1>
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      {/* <Search onHandleSearch={} /> */}
      {users && <Users users={newUser} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
