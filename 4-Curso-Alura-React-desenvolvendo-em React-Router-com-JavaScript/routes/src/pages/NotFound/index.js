import styles from "./NotFound.module.css";
import React from "react";
import err404 from "assets/erro_404.png";
import ButtonMain from "components/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.containerContent}>
        <span className={styles.text404}>404</span>
        <h1 className={styles.title}> Ops! Page not found</h1>
        <p className={styles.paragraph}>
          Are you sure this is what you were looking for?
        </p>
        <p className={styles.paragraph}>
          Wait a few moments and reload the page, or go back to the main page.
        </p>
        <div onClick={() => navigate("/")}>
          <ButtonMain
            children1={"previous page"}
            children2={"Return"}
          />
        </div>
        <img
          className={styles.dogImage}
          src={err404}
          alt='dog as as img'
        ></img>
      </div>
      <div className={styles.whiteSpace}></div>
    </>
  );
}
