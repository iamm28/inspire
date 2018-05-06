export default function manageTodo(state = {
  videos: [], webImages: [], files: [], audioFiles: [], quotes: [],
}, action) {
  switch (action.type) {
    case 'ADD_FILE':
      return { ...state, files: state.files.concat(action.file)}
    case 'ADD_VIDEO':
      return { ...state, videos: state.videos.concat(action.video)}
    case 'ADD_WEB_IMAGE':
      return { ...state, webImages: state.webImages.concat(action.webImage)}
    case 'ADD_AUDIO':
      return { ...state, audioFiles: state.audioFiles.concat(action.audioFile)}
    case 'ADD_QUOTE':
      return { ...state, quotes: state.quotes.concat(action.quote)}
    default:
      return state;
  }
}
