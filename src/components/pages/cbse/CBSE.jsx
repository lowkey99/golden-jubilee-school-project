const CBSE = () => {
  const pdfFiles = [
    {
      id: "1",
      name: "Mandtory Discloure (2023-2024)",
      path: "/public/1.  Mandtory Discloure (2023-2024).pdf",
    },
    {
      id: "2",
      name: "NOC From State Government",
      path: "/public/2. NOC From State Government.pdf",
    },
    {
      id: "3",
      name: "Trust Deed",
      path: "/public/3. Trust Deed.pdf",
    },
    {
      id: "4",
      name: "Building Safety Certificate (Form - D)",
      path: "/public/4. Building Safety Certificate (Form - D).pdf",
    },
    {
      id: "5",
      name: "Fire Safety Certificate",
      path: "/public/5. Fire Safety Certificate.pdf",
    },
    {
      id: "6",
      name: "Sanitory Certificate",
      path: "/public/6. Sanitory Certificate.pdf",
    },
    {
      id: "7",
      name: "Fee Structure (2023-2024)",
      path: "/public/7. Fee Structure (2023-2024).pdf",
    },
    {
      id: "8",
      name: "List of School Management & PTA Committee",
      path: "/public/8. List of School Management & PTA Committee.pdf",
    },
    {
      id: "9",
      name: "Recognition Certificate",
      path: "/public/9. Recognition Certificate.pdf",
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
