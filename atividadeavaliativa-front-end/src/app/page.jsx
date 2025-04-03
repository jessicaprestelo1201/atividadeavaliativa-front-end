import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CategoriesSection from "./components/categoriesSection";
import HeroSection from "./components/heroSection";
import MemeCard from "./components/memeCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <Sidebar />
      <CategoriesSection />
      <MemeCard />
      <Footer />
    </div>
  );
}
