import { Fragment } from "react";
import "./Banner.css";

function Banner() {
  // JSX
  return (
    <Fragment>
      <header className="banner">
        <img
          src="/imagens/banner.png"
          alt="O banner principal da página do Organo"
        />
      </header>
    </Fragment>
  );
}
export default Banner;
