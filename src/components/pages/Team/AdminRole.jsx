import VEDASUBIRA from "../../../assets/demo.jpg";

const AdminRole = () => {
  const AdminRoleData = [
    {
      id: "1",
      category: "ADMINISTRATIVE TEAM",
      img: VEDASUBIRA,
      name: "Smt. D.DEVI   M.Com, M.F.M., (M.B.A)",
      qualification: "Accountant and Admin co-ordindinator",
    },
    {
      id: "1",
      category: "ADMINISTRATIVE TEAM",
      img: VEDASUBIRA,
      name: "Sri.  NARAYANAN",
      qualification: "B.Com., MCA., PGDSE.,DISM.,DPM",
    },
    {
      id: "2",
      category: "ADMINISTRATIVE TEAM",
      img: VEDASUBIRA,
      name: "Smt. NIRMALA BALAKRISHNAN   B.A.",
      qualification: "Cashier",
    },
    {
      id: "3",
      category: "ADMINISTRATIVE TEAM",
      img: VEDASUBIRA,
      name: "Sri. P.UDAYAKUMAR",
      qualification: "B.Sc., Graphic Designer",
    },
    {
      id: "4",
      category: "ADMINISTRATIVE TEAM",
      img: VEDASUBIRA,
      name: "Smt VIJAYALAKSHMI .R",
      qualification: "B.Com, Front office",
    },
    
  ];

  const categories = [...new Set(AdminRoleData.map((data) => data.category))];

  return (
    <div
      id="admin-team"
      className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10"
    >
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">ADMINISTRATIVE TEAM</span>
        </h2>
        {categories.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-bold text-lg text-blue-900">{category}</h3>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              {AdminRoleData.filter((data) => data.category === category).map(
                (data) => (
                  <a key={data.id} href="/" aria-label="View Item">
                    
                        <h4 className="text-black font-bold text-lg mb-1">
                          {data.name}
                        </h4>
                        <p className="text-sm tracking-wide text-black">
                          {data.qualification}
                        </p>
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRole;
