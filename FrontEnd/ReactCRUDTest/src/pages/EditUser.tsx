import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../store/user/actions';

interface EditUserProps {
  userId: number;
}

const EditUser: React.FC<EditUserProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleEditUser = () => {
    dispatch(editUser({ id: userId, name }) as any );
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleEditUser}>Edit User</button>
    </div>
  );
};

export default EditUser;
