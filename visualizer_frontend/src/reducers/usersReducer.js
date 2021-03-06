export default function usersReducer(state = { userInfo: {}, isLoggedIn: false }, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      return Object.assign({}, state, {userInfo: action.payload, isLoggedIn: true });

    case 'SIGN_UP_SUCCESS':
      return Object.assign({}, state );

    case 'LOG_OUT_SUCCESS':
      return Object.assign({}, state, {userInfo: {}, isLoggedIn: false } );

    default:
      return state;
  }
};
