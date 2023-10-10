import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
// Store
import { User, useUsers } from './store/hooks/use-users';

export function Users(): React.ReactElement {
  const { users, setUsers } = useUsers();

  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      return response.json();
    },
  });

  useEffect(() => {
    if (!data) return;
    setUsers(data.sort((a,b) => a.name.localeCompare(b.name)));
  }, [data, setUsers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Oops! No users currently available</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>{users?.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
