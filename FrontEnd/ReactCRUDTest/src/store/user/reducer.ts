import { UserAction, UserActionTypes, User } from './types';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UserActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UserActionTypes.EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
