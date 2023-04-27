import useAuth from "../../hooks/useAuth";
import { fetchMe } from "../../api/Users";
import { useEffect, useState } from "react";

export default function Profile() {
  const { token, user } = useAuth();
  //const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  console.log("user from profile:", user);
  useEffect(() => {
    async function getProfile() {
      const response = await fetchMe(token);
      console.log("response from profile:", response);
      //setUser(response.data);
      setMessages(response.data);
    }

    getProfile();
  }, [token]);
  console.log("user in profile:", user);
  console.log("users messages,", messages);
  return (
    <div>
      <h2>{user.username}</h2>
      <div>
        {/* <ul>
          {messages.map((message, index) =>(
            <li key={index} >
            <span> From; {message.fromUser.username}</span>
            <span>Message: {message.content} </span>
            </li>
          ))}
        </ul> */}
        {/* {user.messages &&
          user.messages.map((message) => {
            return (
              <div>
                <h2>{[messages]}</h2>
              </div>
            );
          })} */}
      </div>
      <div>
        {user.posts &&
          user.posts.map((post) => {
            return (
              <div>
                <h3>{post.title}</h3>
                <h3>{post.description}</h3>
                <h3>{post.price}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
