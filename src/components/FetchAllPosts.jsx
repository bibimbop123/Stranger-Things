import { useState, useEffect } from "react";
import { fetchPosts } from "../api/Posts";
import { deletePost } from "../api/Posts";

export default function FetchAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const result = await fetchPosts();
      console.log("result????????", result);
      setPosts(result.data.posts);
    }
    getPosts();
  }, []);

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
              onClick={() => {
                deletePost(post._id);
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
