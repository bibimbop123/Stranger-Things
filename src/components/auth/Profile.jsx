import useAuth from "../../hooks/useAuth";
import { fetchMe } from "../../api/Users";
import { useEffect, useState } from "react";

export default function Profile() {
  const { token } = useAuth();
  const [user, setUser] = useState({});

  console.log("user from profile:", user);
  useEffect(() => {
    async function getProfile() {
      const response = await fetchMe(token);
      setUser(response.data);
    }
    getProfile();
  }, [token]);
  console.log("user in profile:", user);
  return (
    <div>
      <h2>{user.username}</h2>
      {user.messages.map()}
    </div>
  );
}
