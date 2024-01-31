// import { FaQrcode } from " react-icons/fa";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="wrapText flex flex-col md:flex-row overflow-auto">
        {/* <span className="text-center justify-center">
          <FaQrcode size={100} />
        </span> */}
        <section className="text md:w-1/2 md:pr-4 overflow-auto">
          LOREM IPSU LOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM
          IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM
          IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM
          IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSULOREM IPSU{" "}
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
