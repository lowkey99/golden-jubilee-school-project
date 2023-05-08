import steppingImg from "../../../assets/campus/5.jpg";

const AboutStepping = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 lg:w-20 lg:h-20">
          <svg
            className="w-10 h-10 text-deep-purple-accent-400 lg:w-16 lg:h-16"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-between items-end lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              OUR STEPPING STONE
              <br className="hidden md:block" />
              SSBV,{" "}
              <span className="inline-block text-deep-purple-accent-400">
                T.NAGAR
              </span>
            </h2>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mb-5 hover:text-blue-600"
            >
              Learn more
            </a>
            <img src={steppingImg} alt="" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 text-justify ml-5">
              Sree Sankara Bala Vidyalaya, TNagar was founded in 1958 on the
              advice and with the blessings of the Paramacharya the Mahaswami of
              Kanchi. The Conceptualization of SSBV, T.Nagar was to instill the
              teaching of our sacred Scriptures in the minds of the youth beyond
              the caste and community lines but combined with modern Education.
              The School was located in the Heart of City and in the Close
              proximity of T.Nagar Bus Stand and Mambalam Railway Station. The
              School was affiliated to CBSE Stream of syllabus in 1985 and
              around 14 Batches of X Std were sent to the Board Exams. In every
              batch, Pupils came out with flying colors. It was indeed an
              addition of another feather in our cap when the school shrted
              securing 100% pass result from 1993. The School switched over to
              Matriculation Board, Govt. of TamilNadu, in the year 2001. It is
              indeed a privilege to go on record that SSBV was the topper in
              TNagar locality in 2002 & 2003. As nothing succeed success, our
              students achieved greater heights with all-round performance. *It
              is befitting that the Late. Smt. & Sri K.M.S. guard our
              Institution & bless its progress from time to time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStepping;
