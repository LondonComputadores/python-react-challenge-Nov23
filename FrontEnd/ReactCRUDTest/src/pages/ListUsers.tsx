import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/user';
import { fetchUsers } from '../store/user/actions';

const ListUsers: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
