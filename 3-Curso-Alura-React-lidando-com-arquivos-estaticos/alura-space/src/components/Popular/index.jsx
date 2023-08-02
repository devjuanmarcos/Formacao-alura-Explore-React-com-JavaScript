import React from "react";
import popularPhotos from "./popular-photos.json";
import stylesPopular from "./Popular.module.scss";
import Buttonn from "components/Buttonn";

export default function Popular() {
  return (
    <aside className={stylesPopular.populars}>
      <h2>Populares</h2>
      <ul className={stylesPopular.populars__imgs}>
        {popularPhotos.map((photo) => {
          return (
            <li key={photo.id}>
              <img
                src={photo.path}
                alt={photo.alt}
              ></img>
            </li>
          );
        })}
      </ul>
      <Buttonn>Mostrar mais</Buttonn>
    </aside>
  );
}
