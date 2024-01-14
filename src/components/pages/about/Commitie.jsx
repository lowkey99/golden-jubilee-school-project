import VEDASUBIRA from "../../../assets/demo.jpg";
import React from 'react'

const Commitie = () => {
  const CoSchoolData = [
    {
      id: "1",
      category: "",
      img: VEDASUBIRA,
      name: "Sri. A.Vedasubramaniam",
      qualification: "Secretary cum Correspondent",
      },
    {
    id: "2",
    category: "",
    img: VEDASUBIRA,
    name: "Smt. A.Gandhimathi B.Sc.M.A., M.Ed.",
    qualification: "Director, Academics",
    },
    
    {
    id: "3",
    category: "Ex-Officio Members :",
    img: VEDASUBIRA,
    name: "Smt.Rama Sridhar M.A.,B.Ed ",
    qualification: "Principal",
    },
    {
    id: "4",
    category: "Ex-Officio Members :",
    img: VEDASUBIRA,
    name: "Smt.C.Kalyani Ramesh M.Sc., B.Ed.",
    qualification: " Advanced Montessori, ECCE Certified Special Educator &  Child Counsellor ,Vice Principal ",
    },
    {
    id: "5",
    category: "Ex-Officio Members :",
    img: VEDASUBIRA,
    name: "Smt. D.DEVI M.Com., M.F.M.,",
    qualification: "Accountant and Administration co-ordindinator ",
    },
    {
    id: "6",
    category: "Ex-Officio Members :",
    img: VEDASUBIRA,
    name: "Smt.Sheela Pankaj M. A., B.Ed.",
    qualification: "Co-ordinator Examinations",
    },
    {
    id: "7",
    category: "Ex-Officio Members :",
    img: VEDASUBIRA,
    name: "Smt.S.Kumuthapriya M.A.,M.Ed., M.Phil.",
    qualification: "Co-ordinator Middle School",
    },
    {
    id: "8",
    category: "Teacher Members :",
    img: VEDASUBIRA,
    name: "Smt.G.Sasirekha B.Sc,M.A, B.Ed, K.G. ",
    qualification: " Hindi Pracharak",
    },
    {
    id: "8",
    category: "Teacher Members :",
    img: VEDASUBIRA,
    name: "Smt.S.Pushpalatha B.E., B.Ed",
    qualification: "",
    },
    {
    id: "10",
    category: "Parent Members :",
    img: VEDASUBIRA,
    name: "Sri. M.Karthikeyan",
    qualification: "",
    },
    {
    id: "10",
    category: "Parent Members :",
    img: VEDASUBIRA,
    name: "Sri. S.Sathish",
    qualification: "",
    },
    ];




const categories = [...new Set(CoSchoolData.map((data) => data.category))];



return(
  <div>
    <h1 style={{textAlign:'center', fontSize:'35px',fontWeight:'700'}}>Committee</h1>
  <div id = 'committee'  className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
    
    <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900  sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4 ">School Management Committee</span>
        </h2>
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-bold text-lg text-blue-900">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              {CoSchoolData
                .filter((data) => data.category === category)
                .map((data) => (
                  <a key={data.id}  aria-label="View Item">
                    
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
   
    </div>
    
    

  );
  
  };
export default Commitie;