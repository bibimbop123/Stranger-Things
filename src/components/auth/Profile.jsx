import useAuth from "../../hooks/useAuth";
import { fetchMe } from "../../api/Users";
import { useEffect, useState } from "react";

export default function Profile() {
  const { token } = useAuth();
  const [user, setUser] = useState([]);
  console.log("user from profile:", user);
  useEffect(() => {
    async function getProfile() {
      const response = await fetchMe(token);
      setUser(response);
    }
    getProfile();
  }, [token]);
  return <div></div>;
}
