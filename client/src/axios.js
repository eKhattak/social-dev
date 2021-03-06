import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
    "Access-Control-Allow-Origin": "*"
  }
});

export default axiosInstance;
