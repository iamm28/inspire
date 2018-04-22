export default function manageTodo(state = {
  videos: [], webImages: [],
}, action) {
  switch (action.type) {
    case 'ADD_VIDEO':
      return { ...state, videos: state.videos.concat(action.video)}
    case 'ADD_WEB_IMAGE':
      debugger
      return { ...state, webImages: state.webImages.concat(action.webImage)}
    default:
      return state;
  }
}
