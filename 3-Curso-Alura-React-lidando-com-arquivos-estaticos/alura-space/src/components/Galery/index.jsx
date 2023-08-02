import React from "react";
import Tags from "../Tags";
import stylesGalery from "./Galery.module.scss";
import photos from "./photos.json";
import Cards from "./Cards";

function Galery() {
  return (
    <section className={stylesGalery.galery}>
      <h2>Navegue pela Galeria</h2>
      <Tags />
      <Cards
        itens={photos}
        style={stylesGalery}
      />
    </section>
  );
}
export default Galery;
