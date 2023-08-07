import React from "react";
import styles from "./Banner.module.css";
import coloredCircle from "assets/circulo_colorido.png";
import myPhoto from "assets/minha_foto2.png";
import "./Animate.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentation}>
        <h1 className='header'>Hello Word!</h1>
        <p className={styles.paragraph}>
          Welcome to my personal space! I'm Juan Marcos and I'm studying react
          to use in some personal projects and in the future to be able to work
          in the area.
        </p>
      </div>
      <div className={styles.images}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden={true}
          alt='coloredCircle'
        />
        <img
          className={styles.myPhoto}
          src={myPhoto}
          alt='Foto @desouzatexe'
        />
      </div>
    </div>
  );
}
