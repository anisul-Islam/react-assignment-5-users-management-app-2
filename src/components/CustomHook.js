/*eslint-disable*/
import React, { useEffect, useState } from 'react';

export default function CustomHook(url) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data fetching error!');
        } else {
          return res.json();
        }
      })
      .then((res) => {
        setUsers(res);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);
  return { users, error, isLoading };
}
