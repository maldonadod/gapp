const initial = {
  busy: false
}

export default function network(state = initial, {type,res}) {
  switch (type) {
    case 'IS_BUSY':
      return {...state, busy: true}
      break;
    case 'NOT_BUSY':
      return {...state, busy: false}
      break;
    default:
      return state
  }
}
