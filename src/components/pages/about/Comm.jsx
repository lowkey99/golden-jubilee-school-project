import React from 'react'
import VEDASUBIRA from "../../../assets/demo.jpg";
const Comm = () => {
    const CoSchoolData = [
        {
        id: "1",
        category: "TEACHERS :",
        img: VEDASUBIRA,
        name: "Smt.J.Vijayarani B.Com",
        qualification: "",
        },
        {
        id: "2",
        category: "TEACHERS :",
        img: VEDASUBIRA,
        name: "Smt.R.Banurekha M.Com, B.Ed.",
        qualification: "",
        },
        {
        id: "3",
        category: "PARENTS :",
        img: VEDASUBIRA,
        name: "Sri.Anand Ramakrishnan ",
        qualification: "",
        },
        {
        id: "4",
        category: "PARENTS :",
        img: VEDASUBIRA,
        name: "Smt.Srihari Raghavan ",
        qualification: "",
        },
        
    ]

    const categories = [...new Set(CoSchoolData.map((data) => data.category))];
  return (
    <div id = 'committee'  className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
    <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900  sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4 ">PARENT TEACHER CO-ORDINATION COMMITTEE </span>
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

  )
}

export default Comm