const initialState = {
    currentUser: {}
  }
  
export default (state = initialState, action)=> {
      switch (action.type) {
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        case 'LOGOUT_USER':
          return {...state, currentUser: {} }
        case 'COUNT_NEXT':
            return {...state, countNext: action.payload }
        case 'COUNT_GET':
            return {...state, count: action.payload }
        default:
          return state;
      }
}