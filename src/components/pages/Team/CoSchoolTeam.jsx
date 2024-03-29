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
        name: "Sri. S.AYYANAR",
        qualification: "B.Sc,B.P.Ed",
        },
        {
        id: "4",
        category: "DEPARTMENT OF PHYSICAL EDUCATION & YOGA",
        img: VEDASUBIRA,
        name: "Smt. R.SRIPRIYA",
        qualification: "M.A.",
        },
       { id: "4",
        category: "DEPARTMENT OF PHYSICAL EDUCATION & YOGA",
        img: VEDASUBIRA,
        name: "Sri. B.SARAVANAN",
        qualification: "M.Sc, M.A Yoga",
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
        {
        id: "7",
        category: "DEPARTMENT OF ARTS & CRAFT",
        img: VEDASUBIRA,
        name: "Sri. K. NAGARAJAN",
        qualification: "M.A Music, M.Phil, DMT. Dip.Music",
        },
        {
        id: "8",
        category: "DEPARTMENT OF ARTS & CRAFT",
        img: VEDASUBIRA,
        name: "Sri. K.P. KARVARNAN",
        qualification: "Dip. Bharatanatiyam",
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
            <h3 className="mb-3 font-bold text-lg text-blue-900">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              {CoSchoolData
                .filter((data) => data.category === category)
                .map((data) => (
                  <a key={data.id} href="/" aria-label="View Item">
                    
                        <h4 className="text-black font-bold text-lg mb-1">
                          {data.name}
                        </h4>
                        <p className="text-sm tracking-wide text-black">
                          {data.qualification}
                        </p>
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
