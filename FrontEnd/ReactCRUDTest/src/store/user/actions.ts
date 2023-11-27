import axios from 'axios';
import { Dispatch } from 'redux';
import { User, UserActionTypes } from './types';

const apiUrl = 'https://fakestoreapi.com/users';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(apiUrl);
      dispatch({
        type: UserActionTypes.FETCH_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
};

export const addUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(apiUrl, user);
      dispatch({
        type: UserActionTypes.ADD_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };
};

export const editUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(`${apiUrl}/${user.id}`, user);
      dispatch({
        type: UserActionTypes.EDIT_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };
};

export const deleteUser = (userId: number) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`${apiUrl}/${userId}`);
      dispatch({
        type: UserActionTypes.DELETE_USER,
        payload: userId,
      });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
};
