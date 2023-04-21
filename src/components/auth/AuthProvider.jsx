import { createContext, useState, useEffect } from "react";
import { fetchMe } from "../../api/Users";

//create context
export const AuthContext = createContext();

//create our provider (wrapper component)

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getMe() {
      const APIresponse = await fetchMe(token);
      setUser(APIresponse);
    }
    if (token) {
      getMe();
    }
  }, [token]);
  const contextValue = {
    token,
    setToken,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
