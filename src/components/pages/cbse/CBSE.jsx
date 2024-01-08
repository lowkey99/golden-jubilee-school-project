const CBSE = () => {
  const pdfFiles = [
    {
      id: "1",
      name: "Mandtory Discloure (2023-2024)",
      path: "/1.pdf",
    },
    {
      id: "2",
      name: "NOC From State Government",
      path: "/2.pdf",
    },
    {
      id: "3",
      name: "Trust Deed",
      path: "/3.pdf",
    },
    {
      id: "4",
      name: "Building Safety Certificate (Form - D)",
      path: "/4.pdf",
    },
    {
      id: "5",
      name: "Fire Safety Certificate",
      path: "/5.pdf",
    },
    {
      id: "6",
      name: "Sanitory Certificate",
      path: "/6.pdf",
    },
    {
      id: "7",
      name: "Fee Structure (2023-2024)",
      path: "/7.pdf",
    },
    {
      id: "8",
      name: "List of School Management & PTA Committee",
      path: "/8.pdf",
    },
    {
      id: "9",
      name: "Recognition Certificate",
      path: "/9.pdf",
    },
    {
      id: "10",
      name: " Annual Academic Calender (2023-2024)",
      path: "/10.pdf",
    },
    {
      id: "11",
      name: "Land Documents",
      path: "/11.pdf",
    },
    {
      id: "12",
      name: "Self Certicatation",
      path: "/12.pdf",
    },
  ];

  return (
    <div className="py-20 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <h2 className="mb-10 uppercase text-center text-3xl font-bold">
        mandatory-disclosure-(cbse)
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-[70%] mx-auto">
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>Information</th>
              <th className="text-center">View Documents</th>
            </tr>
          </thead>
          <tbody>
            {pdfFiles.map((pdfFile) => (
              <tr key={pdfFile.id}>
                <th>{pdfFile.id}</th>
                <td>{pdfFile.name}</td>
                <td className="text-center">
                  <a
                    href={pdfFile.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-lg text-blue-700"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CBSE;
