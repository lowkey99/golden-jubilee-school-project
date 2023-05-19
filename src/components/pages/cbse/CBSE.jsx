import { useState } from "react";
// import { PDFDownload } from "react-pdf";

const CBSE = () => {
  const [pdfFiles, setPdfFiles] = useState([
    {
      name: "Mandtory Discloure (2023-2024)",
      path: "/public/1.  Mandtory Discloure (2023-2024).pdf",
    },
    {
      name: "NOC From State Government",
      path: "/public/2. NOC From State Government.pdf",
    },
    {
      name: "Trust Deed",
      path: "/public/3. Trust Deed.pdf",
    },
    {
      name: "Building Safety Certificate (Form - D)",
      path: "/public/4. Building Safety Certificate (Form - D).pdf",
    },
    {
      name: "Fire Safety Certificate",
      path: "/public/5. Fire Safety Certificate.pdf",
    },
    {
      name: "Sanitory Certificate",
      path: "/public/6. Sanitory Certificate.pdf",
    },
    {
      name: "Fee Structure (2023-2024)",
      path: "/public/7. Fee Structure (2023-2024).pdf",
    },
    {
      name: "List of School Management & PTA Committee",
      path: "/public/8. List of School Management & PTA Committee.pdf",
    },
    {
      name: "Recognition Certificate",
      path: "/public/9. Recognition Certificate.pdf",
    },
  ]);

  const handleDownload = (pdfFile) => {
    const url = `${pdfFile.path}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = pdfFile.name;
    a.click();
  };

  return (
    <div className="py-20 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <h2 className="mb-10 uppercase text-center text-3xl font-bold">mandatory-disclosure-(cbse)</h2>
      <div className="grid grid-cols-4 gap-10">
        {pdfFiles.map((pdfFile) => (
          <div key={pdfFile.name} className="card bg-base-200 shadow-md">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{pdfFile.name}</h2>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownload(pdfFile)}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CBSE;
