import React, { useState,useEffect } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/users')
  const [users, setUsers] = useState(data);
  const[CopyUsers,setCopyUser]=useState(data);
  
  useEffect(()=>{
    if(data)
    {
      setCopyUser(data)
    }
  },[data])

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const NewData=data.filter((data)=>{
      return data.id!==id
    })
    setCopyUser(NewData)
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    const filter = data.filter((data) => {
      const name = data.name.toLowerCase();
      return name.startsWith(value);
    })
    setCopyUser(filter)
  };
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {users && <Users users={CopyUsers} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
