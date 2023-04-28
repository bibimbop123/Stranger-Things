import { useState, useEffect } from "react";
import { fetchPosts } from "../api/Posts";
import { deletePost } from "../api/Posts";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import PostsList from "./auth/PostsList";
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
  const [searchParam, setSearchParam] = useState("");
  const [searchParam2, setSearchParam2] = useState("");
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
  const filteredPosts = posts.filter((post) => {
    return post.author.username.toLowerCase().includes(searchParam);
  });
  const postsToDisplay = searchParam ? posts : filteredPosts;

  const allPostsToDisplay = postsToDisplay.map((post) => {
    return <PostsList key={post._id} post={post} />;
  });

  const filteredPosts2 = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchParam2);
  });

  const postsToDisplay2 = searchParam2 ? posts : filteredPosts2;

  return (
    <div>
      <div>
        <div>
          <h3>search username:</h3>
          <input
            type="text"
            placeholder="search username"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </div>
        <div>
          <h3>search Title:</h3>
          <input
            type="text"
            placeholder="search Title"
            onChange={(e) => setSearchParam2(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>Username:{post.author.username}</h1>
            <p>Title: {post.title}</p>
            <p> {post.description}</p>
            <h5> Price: {post.price}</h5>
            {user?._id === post.author._id ? (
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
