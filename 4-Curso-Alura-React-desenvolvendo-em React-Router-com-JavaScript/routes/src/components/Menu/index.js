import React from "react";
import stylesMenu from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      {/* prettier-ignore */}
      <nav className={stylesMenu.navigation}>
        <MenuLink to={"/"}>Início</MenuLink>
        <MenuLink to={"/about"} >Sobre mim</MenuLink>

      </nav>
    </header>
  );
}
