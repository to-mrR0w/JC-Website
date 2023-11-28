import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="wrapText flex flex-col md:flex-row overflow-auto ">
        <section className="text md:w-1/2 md:pr-4 overflow-auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </section>
        <div className="image md:w-1/2 mt-4 md:mt-0 overflow-auto">
          <img src="/forrest.jpg" alt="Bild" className="w-full h-auto" />
        </div>
      </div>
      <Footer className="mt-auto" />
    </>
  );
}

export default Home;
