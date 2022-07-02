import axios from 'axios';
import "./config"

/**
 * Authentication Endpoints
 */
export const login = async (data) => await axios.post('/?json=true', data).then(response => response.data);
export const monitors = async (apiKey,ke) => await axios.get(`/${apiKey}/monitor/${ke}`).then(response => response.data);
export const videos = async (apiKey,ke,mid,limit=50,start='',end='') => await axios.get(`/${apiKey}/videos/${ke}/${mid}?limit=0,${limit}&start=${start}&end=${end}`).then(response => response.data);

