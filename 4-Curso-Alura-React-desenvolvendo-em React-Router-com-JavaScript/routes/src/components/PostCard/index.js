import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import ButtonMain from "components/Button";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.cover}
          src={`/assets/posts/${post.id}/capa.png`}
          alt='imagem de capa do post'
        />

        <h2 className={styles.title}>{post.titulo}</h2>
        <ButtonMain
          children1='To read'
          children2='Click here'
        />
      </div>
    </Link>
  );
}
