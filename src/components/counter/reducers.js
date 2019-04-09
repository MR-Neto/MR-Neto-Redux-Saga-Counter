import { INCREMENT, DECREMENT, HELLO } from './actions'

export default function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        count: state.count - 1,
      }
    case HELLO:
      return state;
    default:
      return state;
  }
}