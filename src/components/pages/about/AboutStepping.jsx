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
              OUR STEPPING STONE! SSBV,
              <br className="hidden md:block" />
              {" "}
              <span className="inline-block text-deep-purple-accent-400">
                T.NAGAR
              </span>
            </h2>
          
            <img src={steppingImg} alt="" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-700 text-justify ml-5">
            Sree Sankara Bala Vidyalaya, T.Nagar was founded in 1958, on the
advice, and with the blessings of the Paramacharya the Mahaswami of
Kanchi. The Conceptualization of SSBV was to instill the teachings of
our sacred scriptures in the minds of the youth beyond the caste and
community lines and combined with the modern education. The school
was located in the heart of the city and in the close proximity of
T.Nagar bus stand and Mambalam railway station.<br></br>The School was affiliated to CBSE stream of syllabus in 1985 and
around 14 Batches of X Std were sent to the board exams and
students came out with flying colours. It was indeed an addition of an
other feather in our cap when the school started securing 100% pass
result from 1993. The School switched over to the Matriculation Board,
Govt. of Tamil Nadu, in the year 2001. It is indeed a privilege to go on
record that SSBV was the topper in the locality in 2002 &amp; 2003. As
nothing succeeds success, our students achieved greater heights with
all-round performance.<br></br>
“It is befitting that the Late. Smt. &amp; Sri K.M.S. guard our
Institution &amp; blesse its progress from time to time.”            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStepping;
