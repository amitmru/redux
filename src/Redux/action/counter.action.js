import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actionType"

export const increment = () => (dispacth) => {
    dispacth({type:INCREMENT_COUNTER})
}
export const decrement = () => (dispacth) => {
    dispacth({type:DECREMENT_COUNTER})
}