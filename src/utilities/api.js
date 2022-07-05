import axios from 'axios';

/**
 * Authentication Endpoints
 */
export const login = async (data) => await axios.post('/?json=true', data,{
  timeout:8000
}).then(response => response.data);
export const monitors = async (apiKey,ke) => await axios.get(`/${apiKey}/monitor/${ke}`,{
  timeout:8000
}).then(response => response.data);
export const videos = async (apiKey,ke,mid,limit=50,start='',end='') => await axios.get(`/${apiKey}/videos/${ke}/${mid}?limit=0,${limit}&start=${start}&end=${end}`,{
  timeout:8000
}).then(response => response.data);


