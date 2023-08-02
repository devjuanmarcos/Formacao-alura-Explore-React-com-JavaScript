import React from "react";
import Tags from "../Tags";
import photos from "./photos.json";
import styles from "./Galery.module.scss";
import open from "../../assets/open.png";
import favorite from "../../assets/favorito.png";

export default function Galery() {
  return (
    <section className={styles.galery}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <ul className={styles.galery__cards}>
        {photos.map((photo) => {
          return (
            <li
              key={photo.id}
              className={styles.galery__card}
            >
              <img
                className={styles.galery__image}
                src={photo.image}
                alt={photo.title}
              />
              <p className={styles.galery__description}> {photo.title} </p>
              <div>
                <p>{photo.credits} </p>
                <span>
                  <img
                    src={favorite}
                    alt='Ícone coração de curtir'
                  />
                  <img
                    src={open}
                    alt='Ícone de abrir modal'
                  />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
