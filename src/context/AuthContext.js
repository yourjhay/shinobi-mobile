import React, { createContext, useState } from "react";

export const AuthContext = createContext(undefined);

export const AuthProvider = (props) => {
  const [user, setUser] = useState(undefined)
  const [token, setToken] = useState(undefined)
  const [monitors, setMonitors] = useState(undefined)
  const [axiosURI, setAxiosURI] = useState(undefined)


  const [passwordReset, setPasswordReset] = useState({
    code:'',
    email:''
  })

  const contextValue = {
    user, setUser,
    token, setToken,
    passwordReset, setPasswordReset,
    monitors, setMonitors,
    axiosURI, setAxiosURI
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
