import About from "../../../assets/solana-ui.webp";

const AboutOpportunity = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="lg:grid grid-cols-2 justify-between items-center gap-x-10 gap-y-16">
          <div className="bg-gradient p-10 text-white text-[18px] rounded-xl mt-5 sm:mt-0">
            <div className="flex gap-2 mb-10">
              <div className="p-2 rounded-full bg-[#ED6A5E]"></div>
              <div className="p-2 rounded-full bg-[#F5BE4F]"></div>
              <div className="p-2 rounded-full bg-[#62C454]"></div>
            </div>
            <p className=" text-xs sm:text-base">
              <span className="text-red-800 ">$ solana</span> airdrop 1
            </p>
            <p className="mt-5 text-xs sm:text-base">DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBUm G5CNSKK</p>
            <p className="my-5  text-xs sm:text-base">--url https://api.devnet.solana.com</p>
            <p className="mb-10 sm:mb-20 text-xs sm:text-base">Requesting airdrop of 1 SOL from</p>
          </div>
          <div className="">
            <h2 className="text-[34px] lg:text-[52px] font-semibold leading-tight mb-5 mt-5 lg:mt-0">
              Opportunity <br />through <br /> decentralization
            </h2>
            <p>
              We're opening doors to allow anyone to participate in the next
              phase of the internet.
            </p>
          </div>
         
          <div>
            <h2 className="text-[34px] lg:text-[52px] font-semibold leading-tight mb-5 mt-5 lg:mt-0">
              The potential of a <br /> permissionless <br /> world
            </h2>
            <p className="mb-5 lg:mb-0">
              We're opening doors to allow anyone to participate in the next
              phase of the internet.
            </p>
          </div>
          <div className="">
            <img src={About} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOpportunity;
