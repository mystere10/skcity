import axios from "./axios";
import { notification } from "antd";
import dotenv from "dotenv";

dotenv.config();

const getSneakers = async () => {
  try {
    return axios.get(`/sneakers`);
  } catch (error) {
    notification.error({
      message: "Unable to process your request, please try again later.",
    });
  }
};

const getSingleSneaker = async (id) => {
  try {
    return axios.get(`/sneaker/${id}`);
  } catch (error) {
    notification.error({
      message: "Unable to process your request, please try again later.",
    });
  }
};

const createSneaker = (sneaker) => {
  try {
    return axios.post(`/sneaker`, sneaker, {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
        // "Content-Type": "multipart/form-data; boundary=some------",
        // "Content-Type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    notification.error({
      message: "Unable to process your request, please try again later.",
    });
  }
};

const sneakersAPI = {
  getSneakers,
  getSingleSneaker,
  createSneaker,
};

export default sneakersAPI;
