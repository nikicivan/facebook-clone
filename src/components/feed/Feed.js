import React, { useEffect, useState } from "react";
import MessageSender from "../message-sender/MessageSender";
import Post from "../post/Post";
import StoryReel from "../story-reel/StoryReel";
import "./feed.css";

import { db } from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts) {
      db.collection("posts").orderBy("timestamp", "desc").onSnapshot(
        (snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })));
        },
      );
    } else {
      setPosts([]);
    }
  }, [posts]);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default Feed;
