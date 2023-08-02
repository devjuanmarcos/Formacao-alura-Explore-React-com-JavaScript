import React from "react";
import stylesButton from "./Button.module.scss";

export default function Buttonn({ children }) {
  return <button className={stylesButton.button}>{children}</button>;
}
