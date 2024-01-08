import origin from "../../../assets/campus/IMG_0106.jpg";
import vision from "../../../assets/campus/12.jpg";

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
            <p className="mb-5 text-gray-800 text-justify">
              <span className="font-bold">
                Sree Sankara Bala Vidyalaya Golden Jubilee School{" "}
              </span>{" "}
              Sree Sankara Bala Vidyalaya Golden Jubilee School inherited its
legacy from Sree Sankara Bala Vidyalaya, T.Nagar which was founded
on the advice and with the blessings of Paramacharya the Mahaswami
of Kanchi.<br>
</br>
SSBV was the first English medium school in T.Nagar, served the
residents in and around the area for over 48 years. It had the
unblemished record of providing quality education since its inception in
1958.
            </p>
            
          </div>
        </div>
        <div  className="flex flex-col max-w-screen-lg overflow-hidden bg-white border shadow-sm lg:flex-row sm:mx-auto">
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              VISION
            </h5>
            <p className="mb-5 text-gray-800 text-justify">
            <span className="font-bold
">SSBVGJS </span>was established in the year 2008 and the school has
stood up successfully and has completed 15 years of flourishing,
rewarding, effective and meaningful &amp; conducive existence.<br></br>
Our school teaches students, the fundamentals of life to instill
values and principles and serve as a perfect place to develop a strong
positive impact on their attitude and personality. Students learn with
enjoyment and that is the reason that school life is considered the best
phase of our life.<br></br>
A good school will have fair-minded, passionate, skilled and
supportive mentors who will work towards providing quality education,
values to students and groom them to become a fair human being,
good citizen and develop positive attitude to reach higher goals.
            </p>
            
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
