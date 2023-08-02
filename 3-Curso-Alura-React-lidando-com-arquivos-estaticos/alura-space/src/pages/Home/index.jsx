import styles from "./Home.module.scss";

import Header from "components/Header";
import Menu from "components/Menu";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Galery from "components/Galery";
import Popular from "components/Popular";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.princip}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galery}>
          <Galery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
}
