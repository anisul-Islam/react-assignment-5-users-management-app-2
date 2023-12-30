import React, { useEffect, useState } from "react";

import Search from "./components/Search";
import Users from "./components/Users";
import useFetch from "./hook/useFetch";

const App = () => {
  // Task 2: use custom hook

  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [users, setUsers] = useState(data);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  // get data, error, isLoading states from custom hook here

  // use url: 'https://jsonplaceholder.typicode.com/users'

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    if (lowerCaseSearchText === "") {
      setUsers(data || []);
    } else {
      // Otherwise, filter users based on the search text
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(lowerCaseSearchText)
      );
      setUsers(filteredUsers);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {!isLoading && !error && (
        <Users users={users} onHandleDeleteUser={handleDeleteUser} />
      )}
    </div>
  );
};

export default App;
