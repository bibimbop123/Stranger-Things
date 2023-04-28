import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostsList({ post }) {
  const navigate = useNavigate();
  return (
    <diV>
      <h3>{post.title}</h3>
      <h3>{post.description}</h3>
      <h3>{post.price}</h3>
    </diV>
  );
}
