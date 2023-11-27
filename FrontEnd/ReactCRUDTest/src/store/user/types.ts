export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    ADD_USER = 'ADD_USER',
    EDIT_USER = 'EDIT_USER',
    DELETE_USER = 'DELETE_USER',
  }
  
  export interface User {
    id: number;
    name: string;
    // Add other user properties as needed
  }

  export interface newUser {
    id: number;
    name: string;
    // Add other user properties as needed
  }
  
  interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
    payload: User[];
  }
  
  interface AddUserAction {
    type: UserActionTypes.ADD_USER;
    payload: User;
  }
  
  interface EditUserAction {
    type: UserActionTypes.EDIT_USER;
    payload: User;
  }
  
  interface DeleteUserAction {
    type: UserActionTypes.DELETE_USER;
    payload: number; // userId
  }
  
  export type UserAction = FetchUsersAction | AddUserAction | EditUserAction | DeleteUserAction;
  