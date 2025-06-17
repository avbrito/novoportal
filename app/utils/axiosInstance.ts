import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://apisunimed.unimeduberlandia.coop.br/apisuni",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  

export default axiosInstance;
