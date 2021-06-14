import {
  GET_SNEAKERS,
  GET_SINGLE_SNEAKER,
  SET_CART,
} from "../actionTypes/sneaker";
import { showLoading, hideLoading } from "react-redux-loading";
import sneakersAPI from "../../services/sneakers";

export function getSneakers(sneakers) {
  return {
    type: GET_SNEAKERS,
    sneakers,
  };
}

export function getSingleSneaker(sneaker) {
  return {
    type: GET_SINGLE_SNEAKER,
    sneaker,
  };
}

export function setUserCart(cart) {
  return {
    type: SET_CART,
    cart,
  };
}

export function handleGetSneakers() {
  return (dispatch) => {
    dispatch(showLoading());
    return sneakersAPI.getSneakers().then((sneakers) => {
      dispatch(getSneakers(sneakers));
      dispatch(hideLoading());
    });
  };
}

export function handleSingleSneaker(id) {
  return (dispatch) => {
    dispatch(showLoading());
    return sneakersAPI.getSingleSneaker(id).then((sneaker) => {
      dispatch(getSingleSneaker(sneaker));
      dispatch(hideLoading());
    });
  };
}

export function functionHandleSetUserCart(cart) {
  return (dispatch) => {
    dispatch(setUserCart(cart));
  };
}
