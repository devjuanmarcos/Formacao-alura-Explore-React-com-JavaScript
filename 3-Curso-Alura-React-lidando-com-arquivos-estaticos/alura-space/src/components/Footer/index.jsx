import React from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/iconmonstr-github-1.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href='https://www.facebook.com/profile.php?id=100094975485446'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={facebook}
            alt='facebook'
          />
        </a>
        <a
          href='https://twitter.com/eujuanmarcos'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={twitter}
            alt='twitter'
          />
        </a>
        <a
          href='https://www.instagram.com/desouzatexe/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={instagram}
            alt='instagram'
          />
        </a>
        <a
          href='https://www.instagram.com/desouzatexe/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={github}
            alt='github'
            fil
          />
        </a>
      </div>
      <p>Desenvolvido por Juan Marcos</p>
    </footer>
  );
}
