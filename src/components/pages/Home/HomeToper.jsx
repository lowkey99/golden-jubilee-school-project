import toperIMG1 from "../../../assets/topper/1.jpeg" ;
import toperIMG2 from "../../../assets/topper/2.jpeg";
import toperIMG3 from "../../../assets/topper/3.jpg";
import toperIMG4 from "../../../assets/topper/4.png";
import toperIMG5 from "../../../assets/topper/5.jpeg";
import toperIMG6 from "../../../assets/topper/6.jpeg";
import toperIMG7 from "../../../assets/topper/7.jpeg";
import { useState } from "react";


const HomeToper = () => {
  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const toperDetails = [
    {
      id: "101",
      img:  toperIMG1 ,
      title: "Sivapriya N",
      color: "#FFF7D4",
      rank: "549/600",
    },
    {
      id: "102",
      img:  toperIMG2 ,
      title: "Shakti Swarupini K ",
      color: "#FFACAC",
      rank: "542/600",
    },
    {
      id: "103",
      img:  toperIMG3 ,
      title: "Aiswaryalakshmi A",
      color: "#DDFFBB",
      rank: "539/600",
    },
    {
      id: "104",
      img:  toperIMG4 ,
      title: "Avanthika M",
      color: "#FFF7D4",
      rank: "576/600",
    },
    {
      id: "106",
      img:  toperIMG7 ,
      title: "A Aishwarya",
      color: "#DDFFBB",
      rank: "559/600",
    },
 
    {
      id: "106",
      img:  toperIMG6 ,
      title: "S Govardhanan",
      color: "#DDFFBB",
      rank: "559/600",
    },
  
  ];


  const firstThreeToppers = toperDetails.slice(0, 3);
  const remainingToppers = toperDetails.slice(3);

  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="pt-10 pb-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div>
          <h1 className="text-4xl font-bold text-center text-orange-500">
            Achievements
          </h1>
          <h1 className="text-4xl font-bold text-center mt-3">
            XII Toppers (2022 - 2023)
          </h1>
          <div className="sm:grid grid-cols-3 gap-10 mt-10">
            {firstThreeToppers.map((detail) => (
              <div
                key={detail.id}
                className={`card hover:shadow bg-[${detail.color}] hover:bg-[#f7f7f7] border `}
              >
                <figure className="px-5 pt-5">
                  <div className="pt-5 rounded-md">
                    <img className="rounded-md" src={detail.img} alt="" />
                  </div>
                </figure>
                <div className="card-body items-center text-center justify-between pb-2">
                  <h2 className="card-title text-2xl mb-2">{detail.title}</h2>
                  
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-center mt-8">X Toppers</h1>
          <div className="sm:grid grid-cols-3 gap-10 mt-10">
            {showAll
              ? remainingToppers.map((detail) => (
                  <div
                    key={detail.id}
                    className={`card hover:shadow bg-[${detail.color}] hover:bg-[#f7f7f7] border `}
                  >
                    <figure className="px-5 pt-5">
                      <div className="pt-5 rounded-md">
                        <img className="rounded-md" src={detail.img} alt="" />
                      </div>
                    </figure>
                    <div className="card-body items-center text-center justify-between pb-2">
                      <h2 className="card-title text-2xl mb-2">{detail.title}</h2>
                     
                    </div>
                  </div>
                ))
              : null}
          </div>
          {!showAll && (
            <div className="text-center">
              <button
                onClick={handleSeeMore}
                className="inline-flex items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 bg-blue-700 px-8 py-3 rounded-md text-white font-semibold hover:bg-blue-800 mt-10"
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
    </div>
  );
};

export default HomeToper;
