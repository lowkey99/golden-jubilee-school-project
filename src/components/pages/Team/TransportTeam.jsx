import VEDASUBIRA from "../../../assets/demo.jpg";

const TransportTeam = () => {
  const transportData = [
    {
      id: "1",
      category: "VAN DRIVERS",
      img: VEDASUBIRA,
      name: "Sri . P.SANKAR",
    },
    {
      id: "2",
      category: "VAN DRIVERS",
      img: VEDASUBIRA,
      name: "Sri S.CHANDRA MOHAN",
    },
    {
      id: "3",
      category: "VAN DRIVERS",
      img: VEDASUBIRA,
      name: "Sri P.VANATHU",
    },
    {
      id: "4",
      category: "VAN DRIVERS",
      img: VEDASUBIRA,
      name: "Sri G.KANNAN",
    },
    {
      id: "5",
      category: "VAN DRIVERS",
      img: VEDASUBIRA,
      name: "Sri P.SELVAKUMAR",
    },
    {
      id: "6",
      category: "Van Attenders",
      img: VEDASUBIRA,
      name: "Smt. A.KOKILA",
    },
    {
      id: "7",
      category: "Van Attenders",
      img: VEDASUBIRA,
      name: "Smt. KARPAGAM",
    },
    {
      id: "8",
      category: "Van Attenders",
      img: VEDASUBIRA,
      name: "Smt. Janani",
    },
    {
      id: "9",
      category: "Van Attenders",
      img: VEDASUBIRA,
      name: "Smt.  Aathi Lakshmi",
    },
    {
      id: "10",
      category: "SECURITY TEAM",
      img: VEDASUBIRA,
      name: "Sri A.SEKAR",
    },
    {
      id: "11",
      category: "SECURITY TEAM",
      img: VEDASUBIRA,
      name: "Sri TEK BAHADUR THAPA",
    },
    {
      id: "12",
      category: "SECURITY TEAM",
      img: VEDASUBIRA,
      name: "Sri BAL BAHADUR DARJI",
    },
    {
      id: "13",
      category: "SECURITY TEAM",
      img: VEDASUBIRA,
      name: "Sri KOPIL BAHADUR",
    },
  ];

  const categories = [...new Set(transportData.map((data) => data.category))];

  return (
    <div
      id="transport-team"
      className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10"
    >
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">Transport Team</span>
        </h2>
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-bold text-lg">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-5 sm:row-gap-6 sm:grid-cols-2">
              {transportData
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
                        <p
                          id="security-team"
                          className="text-sm tracking-wide text-white"
                        >
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

export default TransportTeam;
