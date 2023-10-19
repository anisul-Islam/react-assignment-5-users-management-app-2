import React, { useEffect,useState} from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'

  const url = 'https://jsonplaceholder.typicode.com/users';
  const {data,isLoading,error} = useFetch(url);
  const [users,setUsers] = useState(null);
  const [usersCopy,setUsersCopy] = useState(users);

  useEffect( ()=>{
      if(data){
        setUsers(data);
        setUsersCopy(data);
      }
  },[data])
  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filter = usersCopy.filter(user => user.id !== id)
    setUsersCopy(filter)
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    const newValue = users && users.filter(user =>{
      const newUser = user.name.toLowerCase();
      return newUser.startsWith(value);
    })
    setUsersCopy(newValue)
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {users?.length > 1  &&  <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
