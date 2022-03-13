import { UserActionTypes } from './user.types';


// if there is no previous state, we need initial state
const INITIAL_STATE = {
    currentUser: null
}

// here we use default parameter value:
// first parameter is current (previous state)
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
    return {
        ...state,
        currentUser: action.payload
    }
        default:
            return state;
    }

}

export default userReducer;


// TO REMEMBER
//! if state is null, it will NOT fall back to INITIAL_STATE as null in javascript is a value
//! if state is undefined or there is no argument at all then the fall back INITIAL_STATE will work

//! example from documentation how default parameter works:
// function test(num = 1) {
//     console.log(typeof num)
//   }
  
//   test()           // 'number' (num is set to 1)
//   test(undefined)  // 'number' (num is set to 1 too)
  
//   // test with other falsy values:
//   test('')         // 'string' (num is set to '')
//   test(null)       // 'object' (num is set to null)