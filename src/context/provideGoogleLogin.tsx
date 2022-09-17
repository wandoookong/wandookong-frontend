import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext({});

export function ProvideGoogleLogin({ children }) {
  const [userInfo, setUserInfo] = useState(0);
  const value = { userInfo, setUserInfo };

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export function useAuth() {
  return useContext(LoginContext);
}
