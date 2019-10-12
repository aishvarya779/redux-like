function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, { user: action.author, text: action.comment }];
    case 'REMOVE_COMMENT':
      console.log('REMOVE_COMMENT', state);
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}
function comments(state = [], action) {
  console.log(state, action);
  if (action.type !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
}

export default comments;
