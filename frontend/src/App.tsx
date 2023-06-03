import styles from "./styles";
import {
  Billing,
  Business,
  CardsDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats> <Business></Business> <Billing></Billing>
          <CardsDeal></CardsDeal> <Testimonials></Testimonials>
          <Clients></Clients> <CTA></CTA> <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
