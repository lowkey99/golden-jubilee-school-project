import campus1 from "../../../assets/campus/1.jpg";
import campus2 from "../../../assets/Kanchi-Acharyas1.jpg";

const HomeEventLiveUpdate = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="pb-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="sm:grid grid-cols-2 gap-3">
        <section className="">
            <div className="event">
              <h2 className="heading">Events</h2>
              <div className="scroll" style={{height: "400px"}}>
                <ul className="">
                  <li>
                    <span className="event-date">
                      29 <br />
                      April
                    </span>
                    New admission opens for LKG to IX
                  </li>
                  <li>
                    <span className="event-date">
                      29 <br />
                      April
                    </span>
                    New admission opens for LKG to IX
                  </li>
                  <li>
                    <span className="event-date">
                      29 <br />
                      April
                    </span>
                    New admission opens for LKG to IX
                  </li>
                  <li>
                    <span className="event-date">
                      29 <br />
                      April
                    </span>
                    New admission opens for LKG to IX
                  </li>
                  <li>
                    <span className="event-date">
                      29 <br />
                      April
                    </span>
                    New admission opens for LKG to IX
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="">
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
        <div className="relative shadow-xl border-8 sm:border-[20px] border-orange-500 mx-auto mt-20 mb-10 rounded-lg ">
          <img className="w-full sm:h-[500px]" src={campus2} alt="" />
          <center className="absolute bottom-0 left-[50%] transform -translate-x-[50%] bg-[#000000a7] text-white sm:font-bold sm:text-xl sm:p-5 w-full">
            Reality can be experienced only with the eye of understanding, not
            just by a scholar
            <p className="text-end sm:mt-3">-Adi Shankarachary</p>
          </center>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomeEventLiveUpdate;
