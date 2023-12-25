import React, { useEffect, useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  const url= 'https://jsonplaceholder.typicode.com/users'
  const {data, isLoading, error} = useFetch(url)
  const [users, setUser] = useState([]);
  const [usersCopy, setUserCopy] = useState(users);


  useEffect(() => {
    if(data){
      setUser(data)
      setUserCopy(data)
    }
  },[data]);
  console.log(users)
  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filterdUser = users.filter((user) => user.id !== id);
    setUserCopy(filterdUser)
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const findUser = users.filter((user) => {
      const newUser = user.name.toLowerCase();
      return newUser.includes(searchText.toLowerCase())
    });
    setUserCopy(findUser)
  };

  return (
    // <div>hello</div>
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
