import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const Users = (props) => {
  const handleDeleteUser = (id) => {
    props.onHandleDeleteUser(id);
  };
  return (
    <section className="users">
      {props.users.map((user) => (
        <User key={user.id} {...user} onHandleDeleteUser={handleDeleteUser} />
      ))}
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  onHandleDeleteUser: PropTypes.func
};

export default Users;
