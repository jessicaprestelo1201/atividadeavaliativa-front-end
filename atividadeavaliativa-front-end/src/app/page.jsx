import styles from "./page.module.css";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import CategoriesSection from "./components/categoriesSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <Sidebar />
      <Feed />
      <CategoriesSection />
      <Footer />
    </div>
  );
}
