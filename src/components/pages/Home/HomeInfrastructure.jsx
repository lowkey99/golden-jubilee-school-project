import Infrastructure from "../../../assets/campus/sports_day.jpg";
import { FaLaptop, FaBusAlt, FaSms } from "react-icons/fa";
import { BiBook, BiNews } from "react-icons/bi";
import { ImLab } from "react-icons/im";

const HomeInfrastructure = () => {
  const cardDetails = [
    {
      id: "101",
      img: FaLaptop,
      title: "Smart Class",
      details:
        "Smart boards available in our classrooms offer interactive learning experiences. They enable dynamic presentations, collaborative activities, and can enhance student engagement through multimedia content",
    },
    {
      id: "102",
      img: BiBook,
      title: "Library",
      details:
        "The library stacks over 5,000 books of various fields and is a storehouse of knowldge. These books enhance extra learning both for the teacher and the taught",
    },
    {
      id: "103",
      img: FaBusAlt,
      title: "Transport",
      details:
        "The students who come from distant areas to the school use the school bus fitted with the latest GPS facility that can be used by parents to track.",
    },
    {
      id: "104",
      img: BiNews,
      title: "Newspaper Reading",
      details:
        "NIE inculcates the reading, understanding reasoning and perceptional skills of all students. Its major role is to get updated about the current affairs.",
    },
    {
      id: "105",
      img: FaSms,
      title: "SMS Facility",
      details:
        "A platform to bridge the gap between the school and the parents. The school activities and other important information are passed over to the parents through this platform",
    },
    {
      id: "106",
      img: ImLab,
      title: "Laboratory",
      details:
        "Well equipped and highly spacious labs help in better understanding. The students are trained to carry out every experiment to have greater insight into learning",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Infrastructure})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "720px",
        }}
      ></div>
      <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
        <div className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <div>
            <h1 className="text-4xl font-bold text-center text-orange-500">
              Infrastructure & Facilities
            </h1>
            <div className="sm:grid grid-cols-3 gap-10 mt-10">
              {cardDetails?.map((detail) => (
                <div key={detail.id} className="card bg-base-100 hover:shadow hover:bg-[#f7f7f7]">
                  <figure className="px-10 pt-10 ">
                    <detail.img className="w-16 h-16 fill-orange-500" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl mb-2">{detail.title}</h2>
                    <p>{detail.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInfrastructure;
