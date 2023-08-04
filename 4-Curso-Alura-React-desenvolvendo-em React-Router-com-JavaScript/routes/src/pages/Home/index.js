import React from "react";
import styles from "./Home.module.css";
import postss from "json/posts.json";
import PostCard from "components/PostCard";

export default function Home() {
  return (
    <ul className={styles.posts}>
      {postss.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
