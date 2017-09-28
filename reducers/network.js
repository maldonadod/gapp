const initial = {
  busy: false
}

export default function network(state = initial, {type}) {
  switch (type) {
    case 'ACTIVITY_INDICATOR_ON':
      return {...state, busy: true}
      break;
    case 'ACTIVITY_INDICATOR_OFF':
      return {...state, busy: false}
      break;
    default:
      return state
  }
}
