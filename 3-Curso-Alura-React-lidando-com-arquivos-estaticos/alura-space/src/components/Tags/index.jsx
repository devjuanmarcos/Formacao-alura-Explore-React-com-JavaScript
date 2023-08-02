import React from "react";
import styles from "./Tags.module.scss";
import photos from "../Galery/photos.json";

export default function Tags({ tags, photosFilter, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li
              key={tag}
              onClick={() => photosFilter(tag)}
            >
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(photos)}>Todas</li>
      </ul>
    </div>
  );
}
