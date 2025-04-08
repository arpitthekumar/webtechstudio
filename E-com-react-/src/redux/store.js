import { createStore } from 'redux';

// Initial state
const initialState = {};

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    // Handle actions
    default:
      return state;
  }
}

// Create store
const store = createStore(reducer);

export default store;
