import axios from "axios";

const instance = axios.create({
  // baseURL: BASE_URL
});

const requestHandler = (config) => {
  return config;
};
instance.interceptors.request.use(requestHandler);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    const code = error && error.response ? error.response.status : 0;
    if (code === 401 || code === 403) {
      // console.log('error')
      // console.warn("error code", code);
    }
    return Promise.reject(error);
  },
);
export default instance;