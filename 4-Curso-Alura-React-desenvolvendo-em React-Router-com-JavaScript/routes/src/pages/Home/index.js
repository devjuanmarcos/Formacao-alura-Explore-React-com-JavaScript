import Banner from "components/Banner";
import React from "react";
import styles from "./Home.module.css";
import postss from "json/posts.json";
import Post from "components/Post";

export default function Home() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {postss.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
