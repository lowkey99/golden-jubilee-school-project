import { useState } from "react";
import LeftImg5 from "../../../assets/header-right-side-photos/Late.png";
import VEDASUBIRA from "../../../assets/A.VEDASUBIRA-ANIAM.png";
import Sridhar from "../../../assets/rama.png";
import img4 from "../../../assets/sriram.png";

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
      img: img4,
      name: "A. SRIRAM",
      details: {
        detail1:
          "Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.",

        detail2:
        "It is indeed a privilege to manage a grand old school like ours where every child is a potential leader.I welcome all the parents and students of this institution for an inspiring and exciting academic year.My sincere regards and deep gratitude to the valued stakeholders for continued support and trust. Parents always have been the motivational force and have facilitated us to move ahead and achieve the excellent results despite the numerous challenges.",
  
        detail3:"We have high expectations for every child and we are committed to bring the change in the student’s life with the best input and provide a safe and the best learning environment in the school. We are determined to work harder in the new session and have lined up activities and programmes that will benefit our children. Our dedicated, experienced, and hardworking team is set to deliver their best ad the curriculum has been improved upon, to raise the standard of teaching and learning. We recognise that parents play an important role in the education of their children as always and our desire to build an all-round, balanced individual cannot be achieved without your support.        " 
      },
            
          detail4:""
      },
    {
      id: "103",
      position: "Secretary cum Correspondent",
      img: VEDASUBIRA,
      name: "A. VEDASUBRAMANIAM",
      details: {
        detail1:
          "“Education is a right not a privilege”Hence qualitative education will give everyone an equal chance to develop their abilities.",

        detail2:
         " Our school is a well known institute in pallikaranai for its quality education and the spiritual, academic and cultural atmosphere within the campus. It provides a safe learning environment for teaching the students through the physical,the cognitive,the social and the affective domain which helps them to collaborate, make connections, become creative and confident and integrate knowledge into real life situations . I am extremely delighted to welcome our students to the exciting new academic year and share the news that our school has produced cent percent results in class X and XII. Students have been thrust with technology without any warning and they rose like phoenix bird and adapted to the change .We took steps in such a manner that every child’s learning improved and came back to their original self.",
        detail3:
        "Hands on activities in our school helps in bringing out their true potential and personality and moulds their character which is essential in the steps they are going to take to reach their goals and achieve their dreams. Our teachers are constantly going through the capacity building workshops to upgrade themselves with vital and latest knowledge and information with respect to their subject which helps them in grooming their students to become compassionate, have control, and courage.These, we believe, will transform and improve the way our students think,behave,and feel towards each other and the society at large."
        ,
        detail4:"Best wishes for yet an other fun filled learning!!!"
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
        detail4:""
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
              
              <div className="">
                <div className="flex items-start justify-start mb-4 ">
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={data.img} className="" alt="" />
                    </div>
                  </div>
                </div>
                <h6 className="mb-2 font-semibold text-lg leading-5">{data.name}</h6>
                <h6 className="mb-2 font-medium leading-5">{data.position}</h6>
                <p className="mb-3 text-sm  text-gray-900">
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
        detail4={modalDetails.detail4}
      />
    </div>
  );
};

export default AboutFounder;
