"use client";
import Image from "next/image";
import { useEffect } from "react";
import ilustration1 from "../../public/undraw_usability_testing_re_uu1g.svg";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substr(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <main className="pb-10 z-40">
      {/* JUMBOTRON */}
      <div className="overflow-hidden relative top-0 p-0 left-0 right-0 z-40 md:min-h-screen">
        <div className="hidden md:block bg-gradient-one rounded-xl size-[1000px] absolute -z-10 -left-48 -top-96"></div>
        <div className="hidden md:block bg-gradient-one rounded-xl size-[900px] absolute -z-10 -right-56 -bottom-56"></div>
        <div className="flex flex-col gap-20 md:gap-40 w-full mt-32 container px-4 md:px-0">
          <div className="md:text-right text-center ml-auto w-full md:w-1/2">
            <p className="text-3xl md:text-6xl font-bold mb-5">
              AI innovations at VAN's
            </p>
            <p className="text-base md:text-2xl">
              Discover how the latest in generative AI capabilities in the SAP
              solutions portfolio can help you revolutionise your business model
              strategy.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <p className="w-full md:w-[700px] font-bold text-lg md:text-3xl ml-0 md:ml-10">
              "The best way to organize your business."
            </p>
            <div className="">
              <Image alt="img" src={ilustration1} width={500} />
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <AboutUs />
      {/* PRICING */}
      <Pricing />
      {/* CONTACT */}
      <Contact />
    </main>
  );
}
