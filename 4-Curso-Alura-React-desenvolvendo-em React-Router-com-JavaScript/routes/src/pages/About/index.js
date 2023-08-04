import React from "react";
import styles from "./About.module.css";
import PostModel from "components/PostModel";
import coverPhoto from "assets/sobre_mim_capa.png";
import aboutPhoto from "assets/minha_foto2.png";

export default function About() {
  return (
    <PostModel
      coverPhoto={coverPhoto}
      title='About me'
    >
      <h3 className={styles.caption}>Hello, I'm Juan Marcos</h3>
      <img
        className={styles.photosAbout}
        src={aboutPhoto}
        alt='photo'
      />
    </PostModel>
  );
}
