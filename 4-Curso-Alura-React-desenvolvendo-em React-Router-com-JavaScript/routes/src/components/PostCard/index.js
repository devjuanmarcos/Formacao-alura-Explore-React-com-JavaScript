import React from "react";
import styles from "./Post.module.css";

export default function PostCard({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.cover}
        src={`/assets/posts/${post.id}/capa.png`}
        alt='imagem de capa do post'
      />

      <h2 className={styles.title}>{post.titulo}</h2>
      <button className={styles.readButton}>ler</button>
    </div>
  );
}
