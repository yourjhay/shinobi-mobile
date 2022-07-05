import axios from 'axios';
export const APP_API='http://192.168.1.100:8081';
console.log(APP_API);
axios.defaults.baseURL                         = `${APP_API}`;
axios.defaults.headers.post['Content-Type']    = 'application/json';
