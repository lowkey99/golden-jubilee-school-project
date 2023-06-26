import React from "react";

const Facility = () => {
  const transportDetails =
    "Safety of students being shuttled in the vehicles is our primary concern. The school has buses for pickup and drop of students that are compliant with the safety and security as per the RTO norms. The details of the bus routes are available. To ensure punctuality, parents are requested to be at the bus stop 5 minutes before the stipulated time during pickup and drop.";

  const routerDetails = [
    {
      busNumber: "TN 14 B 9894",
      route: [
        { sno: 1, area: "KEELKATALI", routeName: "KEELKATALI" },
        { sno: 2, area: "KOVILAMBAKKAM", routeName: "KOVILAMBAKKAM" },
        { sno: 3, area: "HASTHINAPURAM MAIN ROAD", routeName: "NANMANGALAM" },
        { sno: 4, area: "POLICE BOOTH", routeName: "S.KULATHUR" },
        { sno: 5, area: "THANITHOTI", routeName: "S.KULATHUR" },
        { sno: 6, area: "VIDUTHALAI NAGAR", routeName: "S.KULATHUR" },
        { sno: 7, area: "APPA SAMAY APARTMENT", routeName: "PALLIKARANAI" },
        { sno: 8, area: "SELVA NAGAR", routeName: "PALLIKARANAI" },
        { sno: 9, area: "MANOHAR NAGAR", routeName: "PALLIKARANAI" },
        { sno: 10, area: "IIT PARK", routeName: "PALLIKARANAI" },
      ],
    },
    {
      busNumber: "TN 14 - K 0329",
      route: [
        { sno: 1, area: "BABU NAGAR", routeName: "MEDAVAKKAM" },
        { sno: 2, area: "CBI COLONY", routeName: "MEDAVAKKAM" },
        { sno: 3, area: "BELL NAGAR", routeName: "MEDAVAKKAM" },
        { sno: 4, area: "PERUMAL NAGAR", routeName: "MEDAVAKKAM" },
        { sno: 5, area: "PURVANKARA", routeName: "PALLIKARANAI" },
        { sno: 6, area: "POST OFFICE", routeName: "MEDAVAKKAM" },
        { sno: 7, area: "ANNAI GARDEN", routeName: "AMBAL NAGAR" },
        { sno: 8, area: "DELHI BABU NAGAR", routeName: "AMBAL NAGAR" },
        { sno: 9, area: "SAPTHAGIRI GARDEN", routeName: "AMBAL NAGAR" },
        {
          sno: 10,
          area: "NEELAMBAL KALYANA MANDAPAM",
          routeName: "PALLIKARANAI",
        },
        {
          sno: 11,
          area: "PAPPAMAL KALYANA MANDAPAM",
          routeName: "PALLIKARANAI",
        },
      ],
    },
    {
      busNumber: "TN 14 - K 2248",
      route: [
        { sno: 1, area: "PADMAVATHY NAGAR", routeName: "VELACHERY" },
        { sno: 2, area: "ICICI BANK", routeName: "VELACHERY" },
        { sno: 3, area: "GANDHI ROAD", routeName: "VELACHERY" },
        { sno: 4, area: "SELVA NAGAR", routeName: "VELACHERY" },
        { sno: 5, area: "PUZDHIVAKKAM", routeName: "VELACHERY" },
        { sno: 6, area: "BRINDAVAN NAGAR", routeName: "RAM NAGAR" },
        { sno: 7, area: "MUGILAN TEA SHOP", routeName: "RAM NAGAR" },
        { sno: 8, area: "DOSHI FLAT", routeName: "KAIVELI" },
        { sno: 9, area: "RAMACHANDRA SALAI", routeName: "MADIPAKKAM" },
        { sno: 10, area: "KARTHIKEYAPURAM", routeName: "MADIPAKKAM" },
        { sno: 11, area: "ANNA NAGAR", routeName: "MADIPAKKAM" },
        { sno: 12, area: "KEELKATALI", routeName: "KEELKATALI" },
      ],
    },
    {
      busNumber: "TN 14 Q 0610",
      route: [
        { sno: 1, area: "KAMAKOTI NAGAR", routeName: "PALLIKARANAI" },
        { sno: 2, area: "SYNDICATE COLONY", routeName: "PALLIKARANAI" },
        { sno: 3, area: "VGP SHANTHI COLONY", routeName: "PALLIKARANAI" },
        { sno: 4, area: "PERIYAR NAGAR", routeName: "PALLIKARANAI" },
        { sno: 5, area: "NAKKIRAN NAGAR", routeName: "PALLIKARANAI" },
        { sno: 6, area: "MANOHAR NAGAR", routeName: "PALLIKARANAI" },
        { sno: 7, area: "KAVI MANI STREET", routeName: "PALLIKARANAI" },
        { sno: 8, area: "MOTHER SCHOOL", routeName: "PALLIKARANAI" },
        { sno: 9, area: "THULUKANATHAMMAN STREET", routeName: "PALLIKARANAI" },
        { sno: 10, area: "VARATHARAJAPURAM", routeName: "PALLIKARANAI" },
        { sno: 11, area: "PANCHAYAT OFFICE", routeName: "PALLIKARANAI" },
        { sno: 12, area: "MASUTHI STREET", routeName: "PALLIKARANAI" },
        { sno: 13, area: "VALLAL PARI NAGAR", routeName: "PALLIKARANAI" },
        { sno: 14, area: "SAI GANESH NAGAR", routeName: "PALLIKARANAI" },
        { sno: 15, area: "ST.JOHN'S PUBLIC SCHOOL", routeName: "PALLIKARANAI" },
        { sno: 16, area: "INFANT SCHOOL", routeName: "PALLIKARANAI" },
        { sno: 17, area: "JAYACHANDRA NAGAR", routeName: "PALLIKARANAI" },
        { sno: 18, area: "RICE MILL", routeName: "PALLIKARANAI" },
        {
          sno: 19,
          area: "PALLIKARANAI HIGH SCHOOL",
          routeName: "PALLIKARANAI",
        },
      ],
    },
  ];

  return (
    <div className="md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div
        id="transport"
        className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <div className="flex justify-center">
          {/* scroll bar */}
          <div className="w-[100%] lg:max-w-2xl bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Facility</h2>
            <p className="text-gray-600 mb-4">{transportDetails}</p>

            <div style={{ overflowX: "auto" }}>
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">#</th>
                    <th className="border border-gray-400 px-4 py-2">
                      Bus Number
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Area Name
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Route Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {routerDetails.map((router, index) => (
                    <React.Fragment key={router.busNumber}>
                      <tr>
                        <td
                          colSpan="4"
                          className="border border-gray-400 px-4 py-2 font-bold"
                        >
                          Router {index + 1}
                        </td>
                      </tr>
                      {router.route.map((route) => (
                        <tr key={route.sno}>
                          <td className="border border-gray-400 px-4 py-2">
                            {route.sno}
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {router.busNumber}
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {route.area}
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {route.routeName}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
