import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useUsers } from './store/hooks/use-users';

export function Users(): React.ReactElement {
  const { users, setUsers } = useUsers();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/use',
      );
      return response.json();
    },
  });

  useEffect(() => {
    if (!data) return;
    setUsers(data);
  }, [data, setUsers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Ups!</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
