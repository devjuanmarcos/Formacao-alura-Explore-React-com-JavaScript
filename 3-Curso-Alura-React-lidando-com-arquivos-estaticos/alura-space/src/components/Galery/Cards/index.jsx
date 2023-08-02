import React from "react";
import Card from "./Card";

export default function Cards({ itens, style }) {
  return (
    <ul className={style.galery__cards}>
      {itens.map((item) => {
        return (
          <Card
            id={item.id}
            imagem={item.img}
            titulo={item.title}
            creditos={item.credits}
            styles={style}
          />
        );
      })}
    </ul>
  );
}
