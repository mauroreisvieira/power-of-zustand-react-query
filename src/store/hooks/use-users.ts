import { create } from 'zustand';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const useUsers = create<{
  users: User[];
  setUsers: (users: User[]) => void;
}>(set => ({
  users: [],
  setUsers: (users: User[]) => set(() => ({ users })),
}));
