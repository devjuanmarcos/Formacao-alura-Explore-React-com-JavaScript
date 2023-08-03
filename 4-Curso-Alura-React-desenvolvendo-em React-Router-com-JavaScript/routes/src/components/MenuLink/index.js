import { Link, useLocation } from "react-router-dom";
import stylesMenuLink from "./MenuLink.module.css";
import React from "react";

export default function MenuLink({ children, to }) {
  const location = useLocation();

  return (
    <Link
      className={`${stylesMenuLink.link} ${
        location.pathname === to ? stylesMenuLink.linkHighlighted : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
