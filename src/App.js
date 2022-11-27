import React, { useState, useEffect } from "react";

import Search from "./components/Search";
import Users from "./components/Users";
import useFetch from "./hook/useFetch";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { users, isLoading, error } = useFetch(url);
  const [usersCopy, setUsersCopy] = useState(users);

  useEffect(() => {
    setUsersCopy(users);
  }, [users]);

  const handleDeleteUser = (id) => {
    const restUser = usersCopy.filter((user) => user.id !== id);
    setUsersCopy(restUser);
  };

  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    const SearchUser = users.filter((user) => {
      const newUser = user.name.toLowerCase();
      return newUser.startsWith(value);
    });
    setUsersCopy(SearchUser);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />

      {users.length > 1 && (
        <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />
      )}
    </div>
  );
};

export default App;
