import AboutCareers from "./AboutCareers";
import AboutCensorship from "./AboutCensorship";
import AboutCore from "./AboutCore";
import AboutFoundation from "./AboutFoundation";
import AboutHero from "./AboutHero";
import AboutOpportunity from "./AboutOpportunity";

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className=" bg-[#ffffffe7] dark:bg-black">
        <AboutCensorship />
        <hr className=" max-w-screen-lg mx-auto border-t border-gray-200" />
        <AboutCore />
        <hr className="max-w-screen-lg mx-auto border-t border-gray-200" />
        <AboutOpportunity />
        <AboutCareers />
      </div>
      <AboutFoundation />
    </div>
  );
};

export default About;
