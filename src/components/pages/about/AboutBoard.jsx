import { useState } from "react";
import sriram from "../../../assets/Sriram-sir.png";
import AKBARSHA from "../../../assets/AKBARSHA.png";
import SL from "../../../assets/SL-SRIRAM-PP.png";
import Akbarsha from "../../../assets/Akbarsha.png";

import Gandthimathi from "../../../assets/Gandthimathi.png";
import Kalyani from "../../../assets/Kalyani Ramesh.png";
import Rama from "../../../assets/Rama-Sridhar.png";
import DEVI from "../../../assets/new.png";

const AboutBoard = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const boardMembers = [
    {
      name: "A.SRIRAM",
      position: "Managing Trustee cum Chairman",
      image: sriram,
    },
    {
      name: "S.L.SRIRAM",
      position: "Trustee",
      image: SL,
    },
    {
      name: "S.AKBARSHA",
      position: "Patron",
      image: Akbarsha,
    },
    {
      name: "A.VEDASUBRAMANIAM",
      position: "Secretary cum Correspondent",
      image: AKBARSHA,
    },
    {
      name: "A. GANDHIMATHI",
      position: "Director",
      image: Gandthimathi,
    },
    {
      name: "RAMA SRIDHAR",
      position: "Principal",
      image: Rama,
    },
    {
      name: "C.KALYANI RAMESH",
      position: "Vice Principal",
      image: Kalyani,
    },
    {
      name: "DEVI DORAI",
      position: "Administration Co-ordination",
      image: DEVI,
    },

  ];

  const visibleMembers = showAll ? boardMembers : boardMembers.slice(0, 4);

  return (
    <div
      id="committee"
      className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10"
    >
      <div id="correspondent" className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      {/* Rest of your code */}
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {visibleMembers.map((member, index) => (
          <a href="/" aria-label="View Item" key={index}>
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={member.image}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <h3 className="text-2xl font-semibold tracking-wide text-white">
                  {member.name}
                </h3>
                <p className="text-sm tracking-wide text-white">
                  {member.position}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <button
            onClick={handleSeeMore}
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            See more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default AboutBoard;
