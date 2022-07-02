import {useContext} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from "../context/AuthContext";

const useLogin = () => {
  const {setUser, setToken} = useContext(AuthContext);

  let setLogin;

  setLogin = async (res) => {
    const jsonValue = JSON.stringify(res)
    await AsyncStorage.setItem('user', jsonValue)
    await AsyncStorage.setItem('token', res.auth_token)
    setUser(res)
    setToken(res.auth_token)
  };

  return setLogin
}

export default useLogin
