import {
  GET_SNEAKERS,
  GET_SINGLE_SNEAKER,
  SET_CART,
  CREATE_SNEAKER,
} from "../actionTypes/sneaker";

export default function sneakers(state = {}, action) {
  switch (action.type) {
    case GET_SNEAKERS:
      return {
        ...state,
        ...action.sneakers,
      };
    case GET_SINGLE_SNEAKER:
      return { ...state, singleSneaker: action.sneaker };
    case SET_CART:
      return { ...state, cart: action.cart };
    case CREATE_SNEAKER:
      return { ...state, createdSneaker: action.sneaker };
    default:
      return state;
  }
}
