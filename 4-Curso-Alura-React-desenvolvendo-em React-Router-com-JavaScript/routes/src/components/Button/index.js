import React from "react";
import "./Button.css";

export default function ButtonMain({ children1, children2 }) {
  return (
    <div class='frame'>
      <button class='custom-btn btn-12'>
        <span>{children1}</span>
        <span>{children2}</span>
      </button>
    </div>
  );
}
