import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Robert Ford',
      image: 'https://www.thewrap.com/wp-content/uploads/2018/06/Westworld-Ford-Anthony-Hopkins.jpg',
      places: 3
    }];

  return <UsersList items={USERS} />
}

export default Users;