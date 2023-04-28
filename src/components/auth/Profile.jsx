import useAuth from "../../hooks/useAuth";
import { fetchMe } from "../../api/Users";
import { useEffect, useState } from "react";
import { deleteMessage } from "../../api/Messages";

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
      <h2>username:{user.username}</h2>
      <div>
        <ul>
          {user.messages &&
            user.messages.map((message) => {
              return (
                <li>
                  <div> From: {message.fromUser.username}</div>
                  <div>Message: {message.content} </div>
                  <button onClick={deleteMessage}>delete message</button>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h1>Posts:</h1>
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
