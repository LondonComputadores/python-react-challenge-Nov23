import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/user/actions';

interface AddUserProps {
    userId: number;
    name: string
}

const AddUser: React.FC<AddUserProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleAddUser = () => {
    dispatch(addUser({id: userId, name })  as any);
    setName('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
