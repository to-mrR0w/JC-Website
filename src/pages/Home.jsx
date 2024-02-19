import Footer from "../components/Footer";

function Home() {
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
          in Rucksäcken leicht integriert werden können.
          <br />
          <b>Wieso</b> eigentlich
        </section>
      </div>

      <div className="wrapText flex flex-col md:flex-row overflow-auto">
        <section className="text md:w-1/2 md:pr-4 overflow-auto text-2xl">
          <b>Wieso</b> eigentlich
        </section>
        <div className="image md:w-1/2 mt-4 md:mt-0 overflow-auto">
          {/* Hier bleibt die Breite des Bildcontainers auf der Hälfte der verfügbaren Breite */}
          <img src="/forrest.jpg" alt="Bild" className="w-full h-auto" />
        </div>
      </div>

      <Footer className="mt-auto" />
    </>
  );
}

export default Home;
