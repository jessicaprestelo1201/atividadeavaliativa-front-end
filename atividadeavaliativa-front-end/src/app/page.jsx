import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Footer />

    </div>
  );
}
