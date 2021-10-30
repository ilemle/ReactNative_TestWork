const defaultState = {
  login: '',
  users: [],
  inputLoginValue: '',
  isLoading: false,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {...state, login: action.payload};
    case 'SET_DATA':
      return {...state, users: action.payload};
    case 'CLEAR_INPUT_LOGIN_VALUE':
      return {...state, login:''};
    case 'SHOW_LOADER':
      return {...state, isLoading: true};
    case 'HIDE_LOADER':
      return {...state, isLoading: false};
    default:
      return state;
  }
};
