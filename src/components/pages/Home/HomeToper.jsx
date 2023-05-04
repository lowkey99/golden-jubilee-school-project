import toperIMG from "../../../assets/header-right-side-photos/Late.Smt.SARADASUBRAMANIAM.png";

const HomeToper = () => {
  const toperDetails = [
    {
      id: "101",
      img: { toperIMG },
      title: "M.Mothith",
      color: "#FFF7D4",
      rank: "565/600",
    },
    {
      id: "102",
      img: { toperIMG },
      title: "Surikutchi sandhya",
      color: "#FFACAC",
      rank: "565/600",
    },
    {
      id: "103",
      img: { toperIMG },
      title: "M.Mothith",
      color: "#DDFFBB",
      rank: "565/600",
    },
  ];
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div>
          <h1 className="text-4xl font-bold text-center text-orange-500">
            Achievements
          </h1>
          <h1 className="text-4xl font-bold text-center mt-3">
            XII Toppers (2021 - 2022)
          </h1>
          <div className="grid grid-cols-3 gap-32 mt-10">
            {toperDetails?.map((detail) => (
              <div
                key={detail.id}
                className={`card hover:shadow bg-[${detail.color}] hover:bg-[#f7f7f7] border`}
              >
                <figure className="px-10 pt-10 ">
                  <div className="pt-5 rounded-md">
                    <img
                      className="w-32 h-auto rounded-md"
                      src={toperIMG}
                      alt=""
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-2xl mb-2">{detail.title}</h2>
                  <button className="bg-red-600 shadow-md px-5 py-3 rounded-md text-white text-3xl font-semibold hover:bg-red-800 ">
              {detail.rank}
            </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-blue-700 px-8 py-3 rounded-md text-white font-semibold hover:bg-blue-800 mt-10">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeToper;
