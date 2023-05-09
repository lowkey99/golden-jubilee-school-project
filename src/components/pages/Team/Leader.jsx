import VEDASUBIRA from "../../../assets/demo.jpg";

const Leader = () => {
  const leaderData = [
    {
      id: "1",
      position: "PRINCIPAL",
      img: VEDASUBIRA,
      name: "Smt. RAMA SRIDHAR",
      qualification: "M.A., B.Ed.",
    },
    {
      id: "2",
      position: "VICE PRINCIPAL",
      img: VEDASUBIRA,
      name: "Smt. C.KALYANI RAMESH",
      qualification:
        "B.Sc., B.Ed. Advanced Montessori ECCE Certified Special Educator and Counsellor",
    },
  ];
  return (
    <div id="leader" className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">LEADERS</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {leaderData.map((data) => (
            <a key={data.id} href="/" aria-label="View Item">
              <h4 className="mb-6 text-xl font-bold">{data.position}</h4>
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
    </div>
  );
};

export default Leader;
