import { createContext, useState } from "react";

//create context
export const AuthContext = createContext();

//create our provider (wrapper component)

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const contextValue = {
    token,
    setToken,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
