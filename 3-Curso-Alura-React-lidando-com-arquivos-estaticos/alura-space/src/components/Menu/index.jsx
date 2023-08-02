import React from "react";
import style from "./Menu.module.scss";
import icons from "./icons.json";
import Icon from "./Icon/index";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.menu__list}>
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            icon={icon}
            style={style}
          />
        ))}
      </ul>
    </nav>
  );
}
