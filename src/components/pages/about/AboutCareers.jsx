const AboutCareers = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl text-center">
        <button className="px-3 py-0 rounded-full bg-[#f2f2f2f7] border border-[#e4e4e4f7] cursor-text">
          CAREERS
        </button>
        <h1 className="text-[44px] lg:text-[100px] font-semibold leading-tight">
          Solana is growing. <br />
          Grow with us.
        </h1>
        <p className="my-5 ">
          Help us create economic access for entrepreneurs and <br /> enterprises all
          over the world.
        </p>
        <a
          href="https://boards.greenhouse.io/solanafoundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border hover:text-[#fff] border-[#FF884D] hover:bg-[#FF884D] px-5 py-3 text-[20px] font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-90 duration-100 rounded-lg">
            Open Network Roles
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutCareers;
