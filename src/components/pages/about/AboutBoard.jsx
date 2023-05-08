import sriram from "../../../assets/Sriram-sir.png";
import SL from "../../../assets/SL-SRIRAM-PP.png";
import Akbarsha from "../../../assets/Akbarsha.png";

const AboutBoard = () => {
  return (
    <div id="committee" className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div id="correspondent" className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div id="committee" className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 id="board" className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">Board Of Trustees</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
            accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
            perspiciatis unde omnis iste.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={sriram}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <h3 className="text-2xl font-semibold tracking-wide text-white">
                  A.SRIRAM
                </h3>
                <p className="text-sm tracking-wide text-white">
                  Managing Trustee cum Chairman
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={SL}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <h3 className="text-2xl font-semibold tracking-wide text-white">
                  S.L.SRIRAM
                </h3>
                <p className="text-sm tracking-wide text-white">
                Trustee
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Akbarsha}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <h3 className="text-2xl font-semibold tracking-wide text-white">
                  S.AKBARSHA
                </h3>
                <p className="text-sm tracking-wide text-white">
                  Patron
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={sriram}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <h3 className="text-2xl font-semibold tracking-wide text-white">
                  A.VEDASUBRAMANIAM
                </h3>
                <p className="text-sm tracking-wide text-white">
                  Secretary cum Correspondent
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            See more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutBoard;
