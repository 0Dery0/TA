import Axios, { AxiosRequestConfig } from "axios";
import storage from "../utils/storage";
import { CONST } from "../utils/Constants";

const baseURL = CONST.BASE_URL_API;

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `bearer ${token}`;
  }

  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const prevRequest = error?.config;
    if (
      (error?.response?.status === 400 &&
        error?.response?.data?.message == "missing or malformed jwt") ||
      (error?.response?.status === 401 &&
        error?.response?.data?.message == "invalid or expired jwt")
    ) {
      storage.clearToken();
      window.location.reload();
      // prevRequest.sent = true
      // const newAccessToken = await refresh()
      // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
      // return axios(prevRequest)
    }

    return Promise.reject(error);
  }
);
