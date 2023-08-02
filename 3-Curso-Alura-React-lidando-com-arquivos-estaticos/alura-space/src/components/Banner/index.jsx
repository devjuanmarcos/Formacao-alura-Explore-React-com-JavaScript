import React from "react";
import banner from "../../assets/banner.png";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>A galeria mais completa</h1>
      <img
        src={banner}
        alt='A imagem da terra vista do espaço'
      />
    </div>
  );
}
