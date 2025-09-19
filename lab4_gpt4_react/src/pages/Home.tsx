import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Brands from "../components/Brands.tsx";
import WhatIsChatGpt from "../components/WhatIsChatGpt.tsx";
import FutureHere from "../components/FutureHere.tsx";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
    </>
  );
};

export default Home;
