import { AboutItem } from "./AboutItem";

const AboutCore = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-16 lg:py-20 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h1 className="text-[44px] md:text-[70px] lg:text-[96px] font-semibold leading-none">
            Core
            <span className="">
              <br />
            </span>{" "}
            Initiatives
          </h1>
          <div>
            <AboutItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCore;
