import VEDASUBIRA from "../../../assets/demo.jpg";

const HouseKeeping = () => {
  const houseKeepingData = [
    {
      id: "1",

      img: VEDASUBIRA,
      name: "Smt R.SARASWATH",
    },
    {
      id: "2",

      img: VEDASUBIRA,
      name: "Smt P.SEETHA",
    },
    {
      id: "3",

      img: VEDASUBIRA,
      name: "Smt S.ADILAKSHMI",
    },
    {
      id: "4",

      img: VEDASUBIRA,
      name: "Smt MOHANA",
    },
    {
      id: "5",

      img: VEDASUBIRA,
      name: "Smt CHITHRA",
    },
    {
      id: "6",

      img: VEDASUBIRA,
      name: "Smt V.SUGANYA",
    },
    {
      id: "7",

      img: VEDASUBIRA,
      name: "Smt. Muthulakshmi",
    },
    {
      id: "8",

      img: VEDASUBIRA,
      name: "Smt. Kanagi",
    },
    {
      id: "9",

      img: VEDASUBIRA,
      name: "Smt. Muthulakshmi",
    },
  ];

  const categories = [
    ...new Set(houseKeepingData.map((data) => data.category)),
  ];

  return (
    <div
      id="house-team"
      className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10"
    >
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">HOUSEKEEPING TEAM</span>
        </h2>
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-bold text-lg">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-5 sm:row-gap-6 sm:grid-cols-2">
              {houseKeepingData
                .filter((data) => data.category === category)
                .map((data) => (
                  <a key={data.id} href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src={data.img}
                        alt=""
                      />
                      <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <h4 className="text-white font-semibold text-base mb-1">
                          {data.name}
                        </h4>
                        <p className="text-sm tracking-wide text-white">
                          {data.qualification}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseKeeping;