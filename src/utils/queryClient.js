import axios from "axios";

const queryClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL, // Set your base URL here
  headers: {
    "Content-Type": "application/json", // Set your default request headers here
  },
});

queryClient.interceptors.request.use(
  (config) => {
    // Do something before sending the request, e.g. add an authorization header
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  }
);

queryClient.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Do something with the response error
    return Promise.reject(error);
  }
);

export default queryClient;
