import campus1 from "../../../assets/campus/1.jpg";

const HomeEventLiveUpdate = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="pb-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:grid grid-cols-3 gap-10">
          <div className="border rounded-2xl shadow-md bg-base-300 mb-10 sm:mb-0">
            <div>
              <h1 className="text-3xl text-center py-5 font-bold text-orange-500 ">
                Event & Live Update
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-4 pt-3 pb-8 bg-base-200">
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
                  We are happy to announce the opening of online registration
                  for new admission for the academic year 2023- 24 from 1st Dec
                  2022 for the classes from LKG to std Xl
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="card bg-base-200 text-blue-800 shadow-md">
              <figure className="px-10 pt-10">
                <img src={campus1} alt="Shoes" className="rounded-xl " />
              </figure>
              <div className="card-body items-center text-center">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque illum beatae accusamus quo minima maxime, veniam
                  reiciendis sunt quasi dolor recusandae iure? Quisquam
                  laboriosam optio voluptatum delectus hic enim voluptas.
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
