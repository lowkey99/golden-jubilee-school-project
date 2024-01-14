import VEDASUBIRA from "../../../assets/demo.jpg";

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
      name: "Smt. S.VALLABHI",
      qualification: "M.A, M.Phil.",
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
      id: "10",
      category: "DEPARTMENT OF HINDI",
      img: VEDASUBIRA,
      name: "Smt. L.MALA",
      qualification: "M.A., B.Ed.",
    },
    {
      id: "9",
      category: "DEPARTMENT OF HINDI",
      img: VEDASUBIRA,
      name: "Smt. G.SASIREKHA",
      qualification: "M.A., B.Ed., K.G. Trained, Hindi Pracharak",
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
      id: "19",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. ABINAYA .G",
      qualification: "M.Sc, M.Phil., B.Ed.",
    },
    {
      id: "18",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. RENUGA .K",
      qualification: "M.Sc, M.Ed.",
    },
    {
      id: "21",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. R. NIMITA KRISHNAN",
      qualification: "B.Sc., B.Ed.",
    },
    {
      id: "15",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. K.R.DHAMAYANTHI ",
      qualification: "M.Sc., B.Ed",
    },
 
    
   
    {
      id: "20",
      category: "DEPARTMENT OF MATHEMATICS",
      img: VEDASUBIRA,
      name: "Smt. K.PRIYADHARSHINI",
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
      id: "32",
      category: "DEPARTMENT OF SCIENCE",
      img: VEDASUBIRA,
      name: "Smt.P SIDDEESWARI",
      qualification: "M.Sc., B.Ed.",
    },
    {
      id: "31",
      category: "DEPARTMENT OF SCIENCE",
      img: VEDASUBIRA,
      name: "Kum. R.SOUNDARYA",
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
      id: "37",
      category: "DEPARTMENT OF COMPUTER SCIENCE",
      img: VEDASUBIRA,
      name: "Smt. R.JISHA",
      qualification: "M.C.A., M.Phil.",
    },
    {
      id: "36",
      category: "DEPARTMENT OF COMPUTER SCIENCE",
      img: VEDASUBIRA,
      name: "Smt. NANDHINI .K",
      qualification: "B.E.",
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
      name: "Smt . V. GIRIJA ",
      qualification: "B.Tech, B.A",
    },
    {
      id: "41",
      category: "KINDER GARTEN",
      img: VEDASUBIRA,
      name: "Smt R. PRABAVATHI",
      qualification: "B.Tech",
    },
  ];

  const categories = [...new Set(academicsData.map((data) => data.category))];

  return (
    <div id="academic-team" className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">ACADEMICS TEAM</span>
        </h2>
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-4 font-bold text-lg text-blue-900">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              {academicsData
                .filter((data) => data.category === category)
                .map((data) => (
                  <a key={data.id} href="/" aria-label="View Item">
                    
                        <h4 className="text-black font-bold text-lg mb-1">
                          {data.name}
                        </h4>
                        <p className="text-sm tracking-wide text-black pb-5">
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

export default AcademicsTeam;
