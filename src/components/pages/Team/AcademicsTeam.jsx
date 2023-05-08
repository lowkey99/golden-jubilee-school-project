import VEDASUBIRA from "../../../assets/Akbarsha.png";

const AcademicsTeam = () => {
  const academicsData = [
    {
      id: "1",
      category: "DEPARTMENT OF ENGLISH",
      img: VEDASUBIRA,
      name: "Smt. S.KUMUTHAPRIYA",
      qualification: "M.A., M.Ed., M.Phil.",
    },
    {
      id: "2",
      category: "DEPARTMENT OF ENGLISH",
      img: VEDASUBIRA,
      name: "Smt. R.MEERA",
      qualification: "M.A., B.Ed.",
    },
    {
      id: "3",
      category: "DEPARTMENT OF ENGLISH",
      img: VEDASUBIRA,
      name: "Selvi. P.PRIYA LAKSHMI",
      qualification: "M.A. Diploma in Montessori",
    },
    {
      id: "4",
      category: "DEPARTMENT OF ENGLISH",
      img: VEDASUBIRA,
      name: "Selvi . ALAGU LAKSHMI",
      qualification: "B.Tech.",
    },
    // DEPARTMENT OF TAMIL
    {
      id: "5",
      category: "DEPARTMENT OF TAMIL",
      img: VEDASUBIRA,
      name: "Smt. P.BHUVANESWARI",
      qualification: "M.A., B. Ed.",
    },
    {
      id: "6",
      category: "DEPARTMENT OF TAMIL",
      img: VEDASUBIRA,
      name: "Smt. D.PATHMAVATHI",
      qualification: "M.A., B. Ed., M. Phil.",
    },
    {
      id: "7",
      category: "DEPARTMENT OF TAMIL",
      img: VEDASUBIRA,
      name: "Smt. N.L.R.SRIVIJAYALAKSHMI",
      qualification: "B. Com., M.A., M.Phil., KG Trained",
    },
    {
      id: "8",
      category: "DEPARTMENT OF TAMIL",
      img: VEDASUBIRA,
      name: "Smt. J.VIJAYARANI",
      qualification: "B.Com.,  KG Trained",
    },
    // DEPARTMENT OF HINDI
    {
      id: "9",
      category: "DEPARTMENT OF HINDI",
      img: VEDASUBIRA,
      name: "Smt. G.SASIREKAHA",
      qualification: "B. SC.,M.A., B.Ed., K.G. Trained, Hindi Pracharak",
    },
    {
      id: "10",
      category: "DEPARTMENT OF HINDI",
      img: VEDASUBIRA,
      name: "Smt. L.MALA",
      qualification: "M.A., B.Ed.",
    },
    {
      id: "11",
      category: "DEPARTMENT OF HINDI",
      img: VEDASUBIRA,
      name: "Smt. P.SRISA CHANDRICA",
      qualification: "B.Com., Rashtrabasha.",
    },
    // DEPARTMENT OF SANSKRIT
    {
      id: "12",
      category: "DEPARTMENT OF SANSKRIT",
      img: VEDASUBIRA,
      name: "Smt. M.SARADHA",
      qualification: "B.E., M.A., B.Ed.",
    },
    // DEPARTMENT OF MATHEMATICS
    {
      id: "13",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Sri. A.D.RAMALINGAM",
      qualification: "M.Sc., B.Ed., M.Phil",
    },
    {
      id: "14",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. C.SANGEETHA",
      qualification: "M.Sc., B.Ed.",
    },
    {
      id: "15",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. K.R.DHAMAYANTHI ",
      qualification: "M.Sc., B.Ed",
    },
    {
      id: "16",
      category: "DEPARTMENT OF SANSKRIT",
      img: VEDASUBIRA,
      name: "Smt. M.SARADHA",
      qualification: "B.E., M.A., B.Ed.",
    },
    {
      id: "17",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Sri. A.D.RAMALINGAM",
      qualification: "M.Sc., B.Ed., M.Phil",
    },
    {
      id: "18",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. C.SANGEETHA",
      qualification: "M.Sc., B.Ed.",
    },
    {
      id: "19",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. K.R.DHAMAYANTHI",
      qualification: "M.Sc., B.Ed.",
    },
    {
      id: "20",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. K.PRIYADHARSHINI",
      qualification: "B.Sc., B.Ed.",
    },
    {
      id: "21",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. R. NIMITA KRISHNAN",
      qualification: "B.Sc., B.Ed.",
    },
    // DEPARTMENT OF SCIENCE
    {
      id: "29",
      category: "DEPARTMENT OF SCIENCE",
      img: VEDASUBIRA,
      name: "Smt. S.PUSHPALATHA",
      qualification: "M.E., B.Ed.",
    },
    {
      id: "30",
      category: "DEPARTMENT OF SCIENCE",
      img: VEDASUBIRA,
      name: "Smt. C.JAYABHARATHI",
      qualification: "M.Sc., B.Ed.",
    },
    {
      id: "31",
      category: "DEPARTMENT OF SCIENCE",
      img: VEDASUBIRA,
      name: "Kum. R.SOUNDARYA",
      qualification: "M.Sc., B.Ed.",
    },
    {
      id: "32",
      category: "DEPARTMENT OF SCIENCE",
      img: VEDASUBIRA,
      name: "Smt. Sayee Lakshmi",
      qualification: "M.Sc., B.Ed.",
    },
    // DEPARTMENT OF SOCIAL STUDIES
    {
      id: "33",
      category: "DEPARTMENT OF SOCIAL STUDIES",
      img: VEDASUBIRA,
      name: "Smt. SHEELA PANKAJ",
      qualification: "M.A., B.Ed.",
    },
    {
      id: "34",
      category: "DEPARTMENT OF SOCIAL STUDIES",
      img: VEDASUBIRA,
      name: "Smt. R.BANUREKHA",
      qualification: "M.Com., B.Ed.",
    },
    {
      id: "35",
      category: "DEPARTMENT OF SOCIAL STUDIES",
      img: VEDASUBIRA,
      name: "Smt. J.SUGANYA",
      qualification: "M. Com., B.Ed. Diploma in Montessori",
    },
    // DEPARTMENT OF COMPUTER SCIENCE
    {
      id: "36",
      category: "DEPARTMENT OF COMPUTER SCIENCE",
      img: VEDASUBIRA,
      name: "Sri. K.NARAYANAN",
      qualification: "B.Com., MCA., PGDSE., DISM., DPM",
    },
    {
      id: "37",
      category: "DEPARTMENT OF COMPUTER SCIENCE",
      img: VEDASUBIRA,
      name: "Smt. R.JISHA",
      qualification: "M.C.A., M.Phil.",
    },
    // KINDER GARTEN
    {
      id: "38",
      category: "KINDER GARTEN",
      img: VEDASUBIRA,
      name: "Smt. R.DHIVYA",
      qualification: "B. Sc., M.B.A., Diploma in Montessori",
    },
    {
      id: "39",
      category: "KINDER GARTEN",
      img: VEDASUBIRA,
      name: "Smt. S.VIJAYA MEENAKSHI",
      qualification: "M.Sc.",
    },
    {
      id: "40",
      category: "KINDER GARTEN",
      img: VEDASUBIRA,
      name: "Smt . V. Girija",
      qualification: "B.A(English) , D.T.Ed, Diploma in Montessori",
    },
    {
      id: "41",
      category: "KINDER GARTEN",
      img: VEDASUBIRA,
      name: "Smt.Prabavathi.R",
      qualification: "B.Tech",
    },
  ];

  const categories = [...new Set(academicsData.map((data) => data.category))];

  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">ACADEMICS TEAM</span>
        </h2>
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-bold text-lg">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              {academicsData
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

export default AcademicsTeam;
