import React from 'react';

import Search from './components/Search';
import Users from './components/Users';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {};

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {};

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={} />
      {users.length > 1 && <Users users={usersCopy} onHandleDeleteUser={} />}
    </div>
  );
};

export default App;
