import origin from "../../../assets/campus/4.jpg";
import vision from "../../../assets/campus/6.jpg";

const AboutPallikarania = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border  shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={origin}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 id="vision" className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              ORIGIN
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">
                Stee Sankara Bala Vidyalaya Golden Jubilee School{" "}
              </span>{" "}
              inherited its legacy from See Sankara Bala Vidyalaya, TNagar which
              was founded on the advice and with the Blessings of Paramacharya
              the Mahaswami of Kanchi. SSBV, T.Nagar was the FIRST English
              Medium School in T.Nagar, and served the residents in and around
              T.Nagar for over 48 years. It had the unblemished record of
              providing Quality Education since in this inception in 1958.
              VISION SSBVGJS, Pallikaranai was started with Blessings of His
              Holiness Puivas Sri Jayendra Saraswathi Swamigal, the Acharya of
              Kanchi kamakodi Peetam. To Commemorate the inauguration of SSBV.
              T.Nagar in 1958 SSBVGJS was established in 2008 and the school has
              crawled successfully to complete 12 years of useful, meaningful &
              fruitful Existence.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn More
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
        <div  className="flex flex-col max-w-screen-lg overflow-hidden bg-white border shadow-sm lg:flex-row sm:mx-auto">
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              VISION
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">SSBVGJS, Pallikaranai</span> dwas
              started with Blessings of His Holiness Pujas Sri Jayendra
              Saraswathi Swamigal, the Acharya of Kanchi kamakodi Peetam. To
              Commemorate the inauguration of SSBV, T.Nagar in 1958 SSBVGJS was
              established in 2008 and the school has crawled successfully to
              complete 12 years of useful, meaningful & fruitful Existence. With
              Divine Blessings of The Holiness SSBVGJS shall fulfill the
              Cherished desire in providing Quality Education to Young Minds
              between 3 & 16 and imbibe them with rich heritage, values and
              traditions and to make our torch Beaters
            </p>
            <div className="flex items-center">
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn More
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
          <div className="relative lg:w-1/2">
            <img
              src={vision}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPallikarania;
