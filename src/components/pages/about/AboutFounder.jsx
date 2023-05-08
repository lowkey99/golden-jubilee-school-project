import { useState } from "react";
import LeftImg5 from "../../../assets/header-right-side-photos/Late.Sri.K.M.SUBRAMNIAM.png";
import VEDASUBIRA from "../../../assets/A.VEDASUBIRA-ANIAM.png";
import Sridhar from "../../../assets/Rama-Sridhar.png";
import ModalUIAbout from "./Modal";

const AboutFounder = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(details) {
    setIsOpen(true);
    setModalDetails(details);
  }

  const teacherData = [
    {
      id: "101",
      position: "Founder",
      img: LeftImg5,
      name: "Late Sri. K. M. Subramaniam",
      details: {
        detail1:
          "Ex. M.L.A., needs no introduction to the citizens of madras. He had his early education in kerala and had his Graduation at Loyala College, Madras. Right from his school days he had taken activae part in freedom movement. In 1931 he joined as clerk in M/s. Bukingham & Carnatic Mills for a meage monthly salary of Rs. 35/. His hard work and and outstanding capabilities got him elevated to the level of Chief Sales Executive. His untiring work and various novels schemes in the field of marketing to push up textile sales made M/s. Binny Ltd., request him to continue as their advisor. His service encomium has been record in the HOUSE OF BINNY.",

        detail2:
          "Late Sri. KMS took active part in the political arena too. He was the Municipal Councilor from 1948 to 1973 (the year in which the council was dissolved). He was elected to Legislative Assembly from T. Nagar Assembly Constituency in the year 1971. He was the Trustee of the city improvement Trust, Madras from 1954 to 1964. He had his strong sentiments towards Late Sri. K. Kamaraj. He was the edtiro of “POLSTAR” a political weekly which was busy in the stands during 70’s. He was an AICC member and also member of Public Accounts Committee Govt. of Tamil Nadu. ",

        detail3:
          "Late Sri. KMS took active part in the affairs of SHIVA VISHNU TEMPLE the worshipping abode for the residents of T. Nagar and nearby areas and he retired as a president of the temple. He had taken active part in a various religious activities for propagating the Secular Teaching of Hinduism.",
      },
    },
    {
      id: "102",
      position: "Chairman & Managing Trustee",
      img: LeftImg5,
      name: "A. SRIRAM",
      details: {
        detail1:
          "SSBVGJS an Institution which was found to provide and inculcate holistic education is now slowly becoming to bear fruits.",

        detail2:
          "Our school which was established in 2008 has completed a decade of glorious and meaningful episodes.  The school has experienced the best and the worst in its 10 years of service to the society.  Repeated success in board exams, accolades in the game of chess at the international level  by our child prodigy R.Ilamparithi, Inventions of our budding scientists like K Balasubramaniam, Kannan and B.Srinidhi, powerful orators like S.Jasmine Riswana, our Proficiency ambassadors K.Rajalakshmi and P.R.Jothi Yamini and our successful sports persons like S.Hasan Mohamad, S.Aparna and D.Ramola are the fruits that has decorated our basket.",

        detail3:
          "Our management always stands second to none in not only keeping its commitment of excellent necessary infrastructure but also see’s to that the infrastructure becomes the integral system of our students and school.  The provision of Audio Visual equipment in classrooms particularly for the kindergarten sections , new sanitation block at each floor, elaborate science labs, extension of classrooms and other allied rooms in the third floor have been completed and stands testimony to our commitment in fulfilling the promise made to parents time and again.  Plans are in the offing for elaborate library,  Yoga and Meditation space and other allied very soon. I am always highly optimistic and with the blessings of our elders and best wishes of parents and friends, the school will march in its journey of achieving the concept of all inclusive holistic education.",
      },
    },
    {
      id: "103",
      position: "Secretary cum Correspondent",
      img: VEDASUBIRA,
      name: "A. VEDASUBRAMANIAM",
      details: {
        detail1:
          "Our school stands apart and has earned the credibility of being one among the best schools which cares for students to explore and enjoy the challenges around.",

        detail2:
          "The display day of our school which exhibits the skills of our students in diverse sections, the annual extravagansa “SHANKARAM” of our School brings out the latent talents of our children on stage, the Capacity Building Programme for our Teachers updates them with latest and vital Information and the overall periodical review of our activities gives a complete shape to the positive energy of our system.",

        detail3:
          "At this juncture, I feel and I am of the strong opinion that the Parental Involvement in making and encouraging their wards to be a participant in this saga of inheriting qualities from our culture based education is the need of the hour and I wish that the change of Guard in our School Academic Hierarchy will provide the necessary solution to our needs",
      },
    },
    {
      id: "104",
      position: "PRINCIPAL’S DESK",
      img: Sridhar,
      name: "RAMA SRIDHAR",
      details: {
        detail1:
          "It is refreshingly hopeful to pen the introductory note after a hiatus of two years . This period has allowed us to introspect, explore and improve. We learned a lot of technical things, how to conduct  virtual meetings and competitions, how to conduct classes and exams online. We strived hard to keep the learning gaps in control. Yes the two years have done damage in certain areas ; particularly writing.  Students have lost their speed in writing and the handwriting has to improve.  The pandemic has imprinted its dent in the life of everyone. But as the famous saying says, ‘Change is the only permanent thing here’, we need to unlearn and learn again. CBSE also has initiated during this period reduced curriculum, exams based  on MCQ, and semester exams  to reduce the burden of the board going students.",

        detail2:
          "With lot of hopes and support from the parents, we are back to the next academic year successfully for the physical classes and to regular schooling.  Expansion in the school building, bigger labs, more class rooms and avid green around the campus are welcome factors from the Management.  Teaching faculty are attending training programs to improve their skills and improvise the same in the class room.  Let us welcome the next year with more confidence and trust  in the Providence. I end the note  with an assurance that all efforts will be taken towards the betterment of the students.",

        detail3: "",
      },
    },
  ];

  return (
    <div
      id="founder"
      className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10"
    >
      <div id="chairman" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div id="principal" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {teacherData.map((data) => (
            <div key={data.id} className="">
              <h6 className="mb-2 font-semibold leading-5">{data.position}</h6>
              <div className="">
                <div className="flex items-start justify-start mb-4 ">
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={data.img} className="" alt="" />
                    </div>
                  </div>
                </div>
                <h6 className="mb-2 font-semibold leading-5">{data.name}</h6>
                <p className="mb-3 text-sm text-gray-900">
                  {data.details.detail1.slice(0, 700)}....
                  <div className="inset-0 inline-block">
                    <button
                      onClick={() => openModal(data.details)}
                      className="text-blue-400 hover:underline"
                    >
                      Read more
                    </button>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalUIAbout
        isOpen={isOpen}
        closeModal={closeModal}
        detail1={modalDetails.detail1}
        detail2={modalDetails.detail2}
        detail3={modalDetails.detail3}
      />
    </div>
  );
};

export default AboutFounder;
