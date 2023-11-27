import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/user/actions';

interface DeleteUserProps {
  userId: number;
}

const DeleteUser: React.FC<DeleteUserProps> = ({ userId }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteUser(userId) as any);
  };

  return (
    <div>
      <h2>Delete User</h2>
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
