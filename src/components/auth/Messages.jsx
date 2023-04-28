import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { postMessage } from "../../api/Messages";

export default function Message() {
  const { token } = useAuth();
  const { postId } = useParams();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await postMessage(postId, token, message);
      setMessage("");
      console.log(response, "response from messages");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          placeholder="Send message here!"
        />
        <button type="submit">Send Message!</button>
      </form>
    </div>
  );
}
