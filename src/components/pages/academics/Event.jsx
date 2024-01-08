import React from 'react'



const Event = () => {

   
    

  const routerDetails = [
    {
      busNumber: "TN 14 Q 0610",
      route: [
        { sno: 1, date:"21st June", area: "Wednesday", routeName: "World Yoga Day" },
        { sno: 2, date:"3rd July", area: "Monday", routeName: "Guru Poornima" },
        { sno: 3, date:"15th August", area: "Tuesday", routeName: "Independence Day" },
        { sno: 4, date:"22nd August ", area: "Tuesday", routeName: "Madras Day" },
       
        { sno: 5, date:"28th August", area: "Monday", routeName: "Onam celebration" },
        { sno: 6, date:"5th September", area: "Tuesday", routeName: "Krishna Jayanthi Celebrations" },
        { sno: 7, date:"5th September", area: "Tuesday", routeName: "Teacher's Day Celebrations" },
        { sno: 8, date:"14th September", area: "Thursday", routeName: "Hindi Diwas" },
        { sno: 9, date:"15th September", area: "Friday", routeName: "Ganesh Chathurthi Celebration" },
        { sno: 10, date:"18th October", area: "Wednesday", routeName: "Founder's Day" },
        { sno: 11, date:"24th October ", area: "Tuesday", routeName: "Dusshera Celebrations" },
        { sno: 12, date:"27th October", area: "Friday", routeName: "Science Projets ( Display Day)" },
        { sno: 13, date:"31st October", area: "Tuesday", routeName: "National unity day" },
        { sno: 14, date:"10th November", area: "Friday", routeName: "Diwali Celebrations" },
        { sno: 15, date:"14th November", area: "Tuesday", routeName: "Govardhana Pooja" },
        { sno: 16, date:"18th December", area: "Monday", routeName: "Andal Day" },
        { sno: 1, date:"22nd December", area: "Friday", routeName: "Maths Expo" },
        { sno: 1, date:"12th Jan 2024", area: "Friday", routeName: "Pongal Celebrations" },
        { sno: 1, date:"26th jan 2024", area: "Friday", routeName: "Republic Day " },
        { sno: 1, date:"5th feb 2024", area: "Monday", routeName: "Road Safety Week" },
       
       
      ],
    },
  ];

  return (
    <div id='event' className="md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div
        id="transport"
        className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl"
      >
        <div className="flex justify-center">
          {/* scroll bar */}
          <div className="w-[100%] lg:max-w-2xl bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">EVENTS & CELEBRATIONS 2023-2024</h2>
           

            <div style={{ overflowX: "auto" }}>
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">DATE</th>
                    
                    <th className="border border-gray-400 px-4 py-2">
                      DAY'S
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                    EVENT'S & CELEBRATION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {routerDetails.map((router, index) => (
                    <React.Fragment key={router.busNumber}>
                      
                      {router.route.map((route) => (
                        <tr key={route.sno}>
                          <td className="border border-gray-400 px-4 py-2 text-center">
                            {route.date}
                          </td>
                          
                          <td className="border border-gray-400 px-4 py-2 text-center">
                            {route.area}
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-center">
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
  )
}

export default Event