
export const INCREMENT = "INCREMENT"
export const INCREMENT_ASYNC = "INCREMENT_ASYNC"
export const DECREMENT = "DECREMENT"
export const HELLO = "HELLO"

export const increment = () => {
  return { type: INCREMENT }
}

export const increment_async = () => {
  return { type: INCREMENT_ASYNC }
}

export const decrement = () => {
  return { type: DECREMENT }
}

export const hello = () => {
  return { type: HELLO }
}