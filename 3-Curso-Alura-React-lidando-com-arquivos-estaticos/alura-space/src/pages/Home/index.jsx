import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "./Home.module.scss";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.princip}>
          <Menu />
          <Banner />
        </section>
      </main>
    </>
  );
}
