import axios from "axios";

const apiurl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000/api";
  } else {
    return "https://backend-1bee.onrender.com/api";
  }
};

const API = axios.create({
  baseURL: apiurl(),
  withCredentials: true,
});

export default API;
