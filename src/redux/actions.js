// actions.js
// Define your action types
export const SOME_ACTION = 'SOME_ACTION';

// Create action creators
export const someAction = (payload) => ({
  type: SOME_ACTION,
  payload,
});
