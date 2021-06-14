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

const sneakersAPI = {
  getSneakers,
  getSingleSneaker,
};

export default sneakersAPI;
