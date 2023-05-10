const Admission = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h1 className=" text-4xl font-bold mb-10">ADMISSION</h1>
        <div>
          <div className="grid sm:grid-cols-2 justify-center items-center gap-10">
            <div>
              <h3 className="text-xl font-semibold">THE ADMISSION PROCEDURE</h3>
              <ul className="list-outside list-disc">
                <li className="my-4">
                  Every parent desirous of seeking admission can walk into our
                  admissions office and fill in the enquiry form.
                </li>
                <li>
                  For further details kindly contact the school office +91
                  9498038238, 9445239985
                </li>
              </ul>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="border"></th>
                      <th className="border">
                        Documents to be submitted at the time of securing
                        admission:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="border">1</th>
                      <td className="border">Birth Certificate</td>
                    </tr>
                    <tr>
                      <th className="border">2</th>
                      <td className="border">Transfer certificate from the previous school</td>
                    </tr>
                    <tr>
                      <th className="border">3</th>
                      <td className="border">Medical Fitness Certificate & Blood Group</td>
                    </tr>
                    <tr>
                      <th className="border">4</th>
                      <td className="border">Community Certificate</td>
                    </tr>
                    <tr>
                      <th className="border">4</th>
                      <td className="border">Aadhar card no.</td>
                    </tr>
                    <tr>
                      <th className="border">6</th>
                      <td className="border">EMIS Number of the child</td>
                    </tr>
                    <tr>
                      <th className="border">7</th>
                      <td className="border">Photographs Parents and child</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center my-20">
            <h3 className="text-xl font-semibold mb-5">AGE CRIETERIA</h3>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th className="border">CLASS</th>
                  <th className="border">2023 - 2024</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border">PRE KG</td>
                  <td className="border">2019 - Dec to 2020 - Nov</td>
                </tr>
                <tr>
                  <td className="border">LKG</td>
                  <td className="border">2018 - Dec to 2019 - Nov</td>
                </tr>
                <tr>
                  <td className="border">UKG</td>
                  <td className="border">2017 - Dec to 2018 - Nov</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center my-20">
            <h3 className="text-xl font-semibold mb-5">FEE STRUCTURE</h3>
            <table className="table table-compact border">
              {/* head */}
              <thead>
                <tr className="border">
                  <th colSpan={5} className="text-center border">FEES FOR THE ACADEMIC YEAR 2023-2024 </th>
                </tr>
              </thead>
              <thead className="border">
                <tr className="border">
                  <th rowSpan={2} className="border">STANDARD</th>
                  <th rowSpan={2} className="border">Regn.fee</th>
                  <th className="border">1ST TERM</th>
                  <th className="border">2ND TERM</th>
                  <th className="border">3RD TERM</th>
                </tr>
                <tr className="border">
                  <th className="border">APRIL</th>
                  <th className="border">AUGUST</th>
                  <th className="border">DEC </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="border">PKG to UKG</td>
                  <td className="border">10000</td>
                  <td className="border">14000</td>
                  <td className="border">14000</td>
                  <td className="border">14000</td>
                </tr>
                <tr className="border">
                  <td className="border">I to V</td>
                  <td className="border">10000</td>
                  <td className="border">16000</td>
                  <td className="border">16000</td>
                  <td className="border">16000</td>
                </tr>
                <tr className="border">
                  <td className="border">VI to VIII</td>
                  <td className="border">10000</td>
                  <td className="border">17500</td>
                  <td className="border">17500</td>
                  <td className="border">17500</td>
                </tr>
                <tr className="border">
                  <td className="border">IX & X</td>
                  <td className="border">10000</td>
                  <td className="border">20000</td>
                  <td className="border">20000</td>
                  <td className="border">20000</td>
                </tr>
                <tr className="border">
                  <td className="border">XI & XII</td>
                  <td className="border">10000</td>
                  <td className="border">22000</td>
                  <td className="border">22000</td>
                  <td className="border">22000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
