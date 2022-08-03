import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePost } from "../../redux/actions/posts";
import FileBase from "react-file-base64";
import "./form.css";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => currentId === p._id) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  console.log(postData);
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    }
    dispatch(createPosts(postData));
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h3>{currentId ? "Editing" : "Creating"} a Memory</h3>
        <div className="form-inputs">
          <input
            type="text"
            className="text-input"
            placeholder="Creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <input
            type="text"
            className="text-input"
            placeholder="Title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <textarea
            className="text-area"
            placeholder="Message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <input
            type="text"
            className="text-input"
            placeholder="Tags (comma separated)"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
        </div>
        <div className="file-base">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button className="submit-btn">Submit</button>
        <button className="clear-btn" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
