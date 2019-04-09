import types from "./types";

export const increment = () => ({ type: types.INCREMENT });

export const increment_async = () => ({ type: types.INCREMENT_ASYNC });

export const decrement = () => ({ type: types.DECREMENT });

export const hello = () => ({ type: types.HELLO });

