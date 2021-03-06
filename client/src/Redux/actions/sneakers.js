import {
  GET_SNEAKERS,
  GET_SINGLE_SNEAKER,
  SET_CART,
  CREATE_SNEAKER,
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

export function createSneaker(sneaker) {
  return {
    type: CREATE_SNEAKER,
    sneaker,
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

export function handleCreateSneaker(sneaker) {
  return (dispatch) => {
    dispatch(showLoading());
    return sneakersAPI
      .createSneaker(sneaker)
      .then((res) => {
        dispatch(createSneaker(res));
      })
      .then(() => dispatch(hideLoading()));
  };
}
