import ImageAboutUs from "../components/ImageAboutUs";
import { FOUNDERS } from "../products";
function About() {
  return (
    <>
      <div className="bg-gray-400  p-10 mt-28 m-auto w-3/4">
        <ul className="justify-between flex items-center ">
          {FOUNDERS.map((person) => (
            <ImageAboutUs key={person.id} data={person} />
          ))}
        </ul>
      </div>
      <div className="ml-auto   bg-slate-50 ">
        <span>
          <p className="">Gewonnene Wettbewerbe:</p>
        </span>
        <ul className="list-disc text-sm">
          <li>Dies dasd</li>
          <li>Dies dasd</li>
          <li>Dies dasd</li>
          <li>Dies adsda</li>
        </ul>
      </div>
    </>
  );
}

export default About;
