import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthProvider";

const useAuth = () =>{
    const {token, setToken} = useContext(AuthContext);
  return useContext(AuthContext);
};

export default useAuth;