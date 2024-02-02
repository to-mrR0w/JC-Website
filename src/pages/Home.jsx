import Footer from "../components/Footer";
import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, TextPlugin);
function Home() {
  const spin = () => {
    alert("Yo");
  };
  gsap.to(".image", {
    duration: 1,
    x: 100,
    onComplete: () => alert("finsi"),
  });

  return (
    <>
      <div className="wrapText flex flex-col md:flex-row overflow-auto">
        <section className="text md:w-1/2 md:pr-4 overflow-auto">
          LOREM IPSU LOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM
          IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM
          IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM
          IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSU{" "}
        </section>
        <div className="image md:w-1/2 mt-4 md:mt-0 overflow-auto">
          <img
            src="/forrest.jpg"
            alt="Bild"
            className="w-full h-auto"
            onClick={spin}
          />
        </div>
      </div>
      <Footer className="mt-auto" />
    </>
  );
}

export default Home;
