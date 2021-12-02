import axios from "axios";
import { useToken } from "../hooks/useToken";

const api = axios.create({
    baseURL:"http://192.168.15.6:4000",
    // baseURL:"https://10.0.2.2:4000",
    // headers:{
    //     "Content-Type":"application/x-www-form-urlencoded",
    //     "Accept": "application/json"
    // }
});

api.interceptors.request.use(
    async (config) => {
      const token = await useToken();
      const auth = token ? `Bearer ${token}` : '';
      config.headers!['Authorization'] = auth;
      return config;
    },
    (error) => Promise.reject(error),
  );

export default api;