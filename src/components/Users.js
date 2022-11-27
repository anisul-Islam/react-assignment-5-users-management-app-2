// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const Users = (props) => {
  const { users } = props;
  console.log(users)
  return (
    <section className="users">
      {props.users.map((user) => (
        <User key={user.id} {...user} onHandleDeleteUser={props.onHandleDeleteUser} />
      ))}
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  onHandleDeleteUser: PropTypes.func
};

export default Users;
