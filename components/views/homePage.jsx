"use client";

import Header from "../molecules/header/header";
import Hero from "../molecules/hero/hero";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-auto items-center">
        <section className="flex flex-col w-full h-auto items-center mt-32 px-5 pb-24 z-20">
          <Hero />
        </section>
      </div>
    </>
  );
};
export default HomePage;
