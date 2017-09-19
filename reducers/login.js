const initial = {
  user: null
}

export default function auth(state = initial, {type,res}) {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return { user: {...res} }
      break;
    case 'LOGIN_FAILED':
      return { error: true, message: res }
      break;
    default:
      return state
  }
}
