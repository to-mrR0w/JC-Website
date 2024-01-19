import { stakeholder } from "../anteilScheine";
import ImageAboutUs from "../components/ImageAboutUs";
import { FOUNDERS } from "../products";

function About() {
  return (
    <>
      <div className="bg-gray-100 p-8 md:p-16 mt-10 md:mt-20 mx-auto w-3/4 rounded-md shadow-lg">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Founders</h2>
        <ul className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {FOUNDERS.map((person) => (
            <ImageAboutUs key={person.id} data={person} />
          ))}
        </ul>
      </div>
      <div className="flex justify-between flex-wrap">
        <span className="flex-1 ml-5  bg-slate-50 p-8 md:p-16 mt-6 md:mt-12 rounded-md shadow-lg overflow-y-auto z-10">
          {" "}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc text-base md:text-lg">
            <li>Gewinner der Entrepreneurship Week</li>
          </ul>
        </span>
        <span className="flex-1 ml-5 mr-5 bg-slate-50 p-8 md:p-16 mt-6 md:mt-12 rounded-md shadow-lg overflow-y-auto z-10">
          {" "}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Junior Company shares:
          </h2>
          <ul className="list-disc text-base md:text-lg">
            <li>Price: {stakeholder.price}€</li>
            <li>Total: {stakeholder.total}</li>
            <li>Taken: {stakeholder.taken}</li>
            <p className="text-center">
              <strong>{(stakeholder.taken / stakeholder.total) * 100} %</strong>
            </p>
            <progress
              className="rounded-md w-1/2 flex mx-auto"
              max={80}
              value={stakeholder.taken}
            ></progress>
          </ul>
        </span>
      </div>
    </>
  );
}

export default About;
