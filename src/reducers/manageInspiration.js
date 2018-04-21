export default function manageTodo(state = {
  inspiration: [],
}, action) {
  switch (action.type) {
    case 'ADD_INSPIRATION':
      return { inspiration: state.inspiration.concat(action.inspiration.video)}
    default:
      return state;
  }
}


//, state.inspiration.webImage.concat(action.inspiration.webImage) 