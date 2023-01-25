import React from 'react';
import { useState, useEffect } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  const {data, error, isLoading} = useFetch('https://jsonplaceholder.typicode.com/users');
  const [usersCopy, setUsersCopy] = useState(data);

  useEffect(() => {
    setUsersCopy(data)
  }, [data])
  

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filterUser =  usersCopy.filter((user)=> user.id !== id);
    setUsersCopy(filterUser)
  };


  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const inputText = searchText.toLowerCase();
    const searchUseers = data && data.filter((user)=>{
      const newUser = user.name.toLowerCase();
      return newUser.startsWith(inputText);
    });
    setUsersCopy(searchUseers)
  };

  
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {data && data.length>1 && usersCopy && <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}

    </div>
  );
};

export default App;
