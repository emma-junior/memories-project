import React from "react";
import { useSelector } from "react-redux";
import { BiLoaderAlt } from "react-icons/bi";
import Post from "./post/Post";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./posts.css";
import Loading from "../Loader/Loading";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <div className="loading">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  ) : (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
