import { useState, useEffect } from "react";
import { fetchPosts } from "../api/Posts";
import { deletePost } from "../api/Posts";
import useAuth from "../hooks/useAuth";

export default function FetchAllPosts() {
  const [posts, setPosts] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    async function getPosts() {
      const result = await fetchPosts();
      console.log("result????????", result);
      setPosts(result.data.posts);
    }
    getPosts();
  }, []);

  async function handleDelete() {
    try {
      const resultD = await deletePost(token, posts._id);
      console.log(resultD);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>Username:{post.author.username}</h1>
            <p>Title: {post.title}</p>
            <p> {post.description}</p>
            <h5> Price: {post.price}</h5>
            <button
              onClick={async (e) => {
                e.preventDefault();
                handleDelete();
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
