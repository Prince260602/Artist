import axios from "axios";

// const VITE_SERVER_BASEURL = "https://artist-42p2.onrender.com/api/v1";
const VITE_SERVER_BASEURL = "https://artist-42p2.onrender.com/api/v1";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'multipart/form-data',
  },
  baseURL: VITE_SERVER_BASEURL,
  withCredentials: true,
});

export { api };
