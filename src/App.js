import React, { useEffect, useState } from "react";
import Posts from "./components/posts/Posts.js";
import memories from "./images/memories.png";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/posts.js";
import Form from "./components/form/Form.js";

function App() {
  const [currentId, setCurrentId] = useState(null);

  console.log(currentId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-content">
          <h1>Memories</h1>
          <img className="navbar-img" src={memories} alt="" />
        </div>
      </div>
      <div className="post-form">
        <div>
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default App;
