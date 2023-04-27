import { useState, useEffect } from "react";
import { fetchPosts } from "../api/Posts";
import { deletePost } from "../api/Posts";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
/*async function editPost(){
  
  console.log("Edit post Id", postId)
  try {
    const result = await updatePost()
    
  } catch (error) {
    
  }
}*/
export default function FetchAllPosts() {
  const [posts, setPosts] = useState([]);
  const { token, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPosts() {
      const result = await fetchPosts();
      console.log("result????????", result);
      setPosts(result.data.posts);
    }
    getPosts();
  }, []);

  async function handleDelete(post) {
    console.log("post:", post);
    try {
      const result = await deletePost(token, post._id);
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    const result = await fetchPosts();

    console.log("result:", result);
    setPosts(result.data.posts);
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
            {user._id === post.author._id ? (
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    handleDelete(post);
                  }}
                >
                  delete
                </button>
                <button> Edit Post</button>
              </div>
            ) : null}
            <button
              onClick={() => {
                navigate(`/posts/${post._id}/messages`);
              }}
            >
              Message
            </button>
          </div>
        );
      })}
    </div>
  );
}
