import axios from "axios";
import config from "./config";

let Axios = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
