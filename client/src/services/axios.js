import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const customAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_SERVER}`,
  timeout: 10000,
});

export default customAxios;
