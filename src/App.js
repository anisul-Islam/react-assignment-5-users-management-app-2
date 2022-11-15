import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Search from './components/Search';
import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([users]);
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsloading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  }, [data]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filter = users.filter((user) => user.id !== id);
    setUsers(filter);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      {<Search onHandleSearch={handleSearch} />}
      {users.length > 1 && <Users users={data} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
