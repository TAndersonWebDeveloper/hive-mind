import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import "./Content.css";
function Content() {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newContentMessage, setNewContentMessage] = useState("");
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPosts(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [postsCollectionRef]);

  const onNewPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postsCollectionRef, {
        title: newPostTitle,
        content: newContentMessage,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewTitle = (e) => {
    setNewPostTitle(e.target.value);
  };
  const handleNewContentMessage = (e) => {
    setNewContentMessage(e.target.value);
  };

  return (
    <>
      <div className="new-post">
        <form onSubmit={onNewPost}>
          <input type="text" onChange={handleNewTitle} placeholder="Title" />
          <input
            type="text"
            onChange={handleNewContentMessage}
            placeholder="What's on your mind?..."
          />
          <button>Post</button>
        </form>
      </div>
      <div className="posts-container">
        {posts.map((item) => {
          return (
            <div className="post" key={Math.random()}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content;
