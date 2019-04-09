import types from './types'

export default function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        count: state.count + 1,
      }
    case types.DECREMENT:
      return {
        count: state.count - 1,
      }
    case types.HELLO:
      return state;
    default:
      return state;
  }
}