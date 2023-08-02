import React from "react";
import open from "../../../../assets/open.png";
import favorite from "../../../../assets/favorito.png";

export default function Card({ id, imagem, titulo, creditos, styles }) {
  return (
    <li
      key={id}
      className={styles.galery__card}
    >
      <img
        className={styles.galery__image}
        src={imagem}
        alt={titulo}
      />
      <p className={styles.galery__description}>{titulo}</p>
      <div>
        <p>{creditos}</p>
        <span>
          <img
            src={open}
            alt='icone de expandir'
          />
          <img
            src={favorite}
            alt='ícone de coração ou favoritar'
          />
        </span>
      </div>
    </li>
  );
}
