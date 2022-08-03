import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import "./post.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="single-post">
      <div className="img-overlay">
        <img className="post-image" src={post.selectedFile} alt="pic" />
      </div>
      <div className="img-content">
        <div>
          <p>{post.creator}</p>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        <p onClick={() => setCurrentId(post._id)} className="horiz">
          <BiDotsHorizontalRounded className="horiz" />
        </p>
      </div>
      <div className="memories-content">
        <p>{post.tags.map((tag) => `#${tag}`)}</p>
        <h4 className="post-title">{post.title}</h4>
        <p className="post-message">{post.message}</p>
        <div className="actions">
          <div
            className="single-action"
            onClick={() => dispatch(likePost(post._id))}
          >
            <p>
              <AiFillLike />
            </p>
            <p>Like {post.likeCount}</p>
          </div>
          <div
            className="single-action"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <p>
              <MdDelete />
            </p>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
