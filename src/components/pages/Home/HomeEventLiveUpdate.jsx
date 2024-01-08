import campus1 from "../../../assets/campus/1.jpg";
import React, { useState, useEffect } from 'react';
import './event.css'

const HomeEventLiveUpdate = () => {
 
  const [newsItems, setNewsItems] = useState([
   
    "",
    'We SSBVGJSians are delighted to open our doors to new students for the academic year 2024-2025 ,',
    'Upcoming Exams : PA 2 For Primary & PA 3 For Secondary , Will begin on NOV 15th 2023 . '
    

  
  ]);

  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="pb-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:grid grid-cols-2 gap-3">
          <div className="">
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <div className="">
                    <h1 className="text-3xl text-center  font-bold text-orange-500 ">
                      Event & Live Update
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center px-4 pt-3 pb-8">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="text-orange-500 w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                        />
                      </svg>
                    </div>
                    <br />
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="text-orange-500 w-32"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      <p className="text-center text-lg font-semibold border-2 border-orange-500 p-3">
                      <div className="vertical-ticker">
    <ul>
      {newsItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
                      </p>
                    </div>
                    
                  </div>
                 <div className="flex-col text-center"> <div className="text-m font-semibold" ><a href="https://forms.gle/qSvrDnh1x4d8WEHJA" target="_blank" rel="noopener noreferrer" className="text-blue-800 text-lg font-bold cursor-pointer" >Click Here</a> To Fill Admission Enquiry</div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card bg-base-200 text-xl shadow-md font-semibold">
              <figure className="px-10 pt-10">
                <img src={campus1} alt="Shoes" className="rounded-xl " />
              </figure>
              <div className="card-body items-center text-center">
                <p>
                The future belongs to those who believe in the beauty of their dreams
               
                </p>
                <div className="card-actions"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeEventLiveUpdate;
