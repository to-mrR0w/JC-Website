import { useEffect } from "react";
import { ScrollTrigger, gsap } from "gsap/all"; // Make sure to import ScrollTrigger

import Footer from "../components/Footer";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  useEffect(() => {
    gsap.fromTo(".text", { opacity: 0.5, y: -100 }, { duration: 1, opacity: 1, y: 0 });
    gsap.fromTo(".img", { duration: 1, opacity: 0.5, scale: 1, y: 100 }, { opacity: 1, scale: 1, y: 0 });
  
    gsap.fromTo(".textWieso", {
      opacity: 0,
      x: 500
    }, {
      opacity: 1,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".textWieso",
        start: "top bottom", // adjust this according to your needs
        toggleActions: "play none none none" // play animation once when triggered
      }
    });
  }, []);
  
  
  

  return (
    <>
      <div className="wrapText flex flex-col md:flex-row overflow-auto">
        <section className="text md:w-1/2 md:pr-4 overflow-auto text-2xl">
          <b>HEY,</b> wir sind eine Junior Company namens EasyCharge infolge
          unsere Ausbildungen bekommen wir eine einzignartige CHance. Unsere
          Kenntnisse zu erweitern und gelerntes Wissen einzusetzten.
        </section>
        <div className="image md:w-1/3 mt-4 md:mt-0 overflow-auto">
          {/* Hier wird die Breite des Bildcontainers auf 1/3 der verfügbaren Breite festgelegt */}
          <img src="/forrest.jpg" alt="Bild" className="w-full h-auto" />
        </div>
        <section className="text md:w-1/2 md:pr-4 overflow-auto text-2xl">
          <b>UNSER,</b> Projekt ist eine wiederverwendbare Tasche inkl.
          Powerbank induktion die in hauptsächlich größeren Taschen sowie auch
          in Rucksäcken leicht integriert werden kann.
          <br />
        </section>
      </div>

      <div className="wrapText flex flex-col md:flex-row overflow-auto">
        <section id="why" className="textWieso md:w-1/2 md:pr-4 overflow-auto text-2xl">
          <b>Wieso</b> eigentlich
        </section>
        <div className="image md:w-1/2 mt-4 md:mt-0 overflow-auto">
          {/* Hier bleibt die Breite des Bildcontainers auf der Hälfte der verfügbaren Breite */}
          <img src="/forrest.jpg" alt="Bild" className="w-full h-auto" />
        </div>
      </div>

      <Footer className="mt-auto footer" />
    </>
  );
}

export default Home;
