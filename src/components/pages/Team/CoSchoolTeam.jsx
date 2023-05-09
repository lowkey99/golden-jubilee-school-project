import VEDASUBIRA from "../../../assets/demo.jpg";

const CoSchoolTeam = () => {
    const CoSchoolData = [
        {
        id: "1",
        category: "DEPARTMENT OF PHYSICAL EDUCATION & YOGA",
        img: VEDASUBIRA,
        name: "Sri. L.SUDHAGAR",
        qualification: "B.A., B. P.Ed.",
        },
        {
        id: "2",
        category: "DEPARTMENT OF PHYSICAL EDUCATION & YOGA",
        img: VEDASUBIRA,
        name: "Sri. R.SANTHOSH",
        qualification: "M. P.Ed., M.Phil.",
        },
        {
        id: "3",
        category: "DEPARTMENT OF PHYSICAL EDUCATION & YOGA",
        img: VEDASUBIRA,
        name: "Sri. K.SURESH",
        qualification: "B. P.Ed.",
        },
        {
        id: "4",
        category: "DEPARTMENT OF PHYSICAL EDUCATION & YOGA",
        img: VEDASUBIRA,
        name: "Smt. R.SRIPRIYA",
        qualification: "M.A.",
        },
        {
        id: "5",
        category: "DEPARTMENT OF ARTS & CRAFT",
        img: VEDASUBIRA,
        name: "Smt. BINDHU SREEKUMAR",
        qualification: "B.A., B.B.A., B.Ed.",
        },
        {
        id: "6",
        category: "DEPARTMENT OF ARTS & CRAFT",
        img: VEDASUBIRA,
        name: "Smt. K.MONISHA",
        qualification: "M.A., B.Ed. Librarian",
        },
        ];

  const categories = [...new Set(CoSchoolData.map((data) => data.category))];

  return (
    <div id="co-team" className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">CO-SCHOLOSTIC TEAM</span>
        </h2>
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-bold text-lg">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              {CoSchoolData
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
                        <h4 className="text-white font-bold text-lg mb-1">
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

export default CoSchoolTeam;
