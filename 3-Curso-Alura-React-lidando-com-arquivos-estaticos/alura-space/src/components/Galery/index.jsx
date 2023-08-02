import React, { useState } from "react";
import Tags from "../Tags";
import stylesGalery from "./Galery.module.scss";
import photos from "./photos.json";
import Cards from "./Cards";

function Galery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((valor) => valor.tag))]; // new Set para impedir de pegar tags repetidas; Tudo colocado em uma array

  const photosFilter = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(newPhotos);
  };

  return (
    <section className={stylesGalery.galery}>
      <h2>Navegue pela Galeria</h2>
      <Tags
        tags={tags}
        photosFilter={photosFilter}
        setItens={setItens}
      />
      <Cards
        itens={itens}
        style={stylesGalery}
      />
    </section>
  );
}
export default Galery;
