import Logo from "../../assets/SSBV(1).png";
import LeftImg1 from "../../assets/left-corner-side-header/2023-05-03 18_11_54-Kanchi-Acharyas1.jpg ‎- Photos.png";
import LeftImg2 from "../../assets/left-corner-side-header/2023-05-03 18_12_46-Kanchi-Acharyas1.jpg ‎- Photos.png";
import LeftImg3 from "../../assets/left-corner-side-header/2023-05-03 18_12_55-Kanchi-Acharyas1.jpg ‎- Photos.png";
import LeftImg4 from "../../assets/left-corner-side-header/2023-05-03 18_13_37-adi shankara - Google Search.png";
import LeftImg5 from "../../assets/header-right-side-photos/Late.Sri.K.M.SUBRAMNIAM.png";
import LeftImg6 from "../../assets/header-right-side-photos/Late.Smt.SARADASUBRAMANIAM.png";
import LeftImg7 from "../../assets/header-right-side-photos/Sri.K.S.ANANTHANARAYANAN.png";
import LeftImg8 from "../../assets/header-right-side-photos/Sri.K.S.S.KRISHNAN.png";

const Header = () => {
  return (
    <div className="bg-[#f7f7f7] shadow ">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 py-5 sm:py-0">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around">
          <div className="lg:flex items-center justify-center sm:justify-between gap-2 order-2 lg:order-1 my-3 lg:my-0 hidden">
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg1} className="" alt="" />
              </div>
            </div>{" "}
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg2} className="" alt="" />
              </div>
            </div>{" "}
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg3} className="" alt="" />
              </div>
            </div>{" "}
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg4} className="" alt="" />
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] w-[100%] mx-0 order-3 lg:order-2 py-2">
            <img src={Logo} className="" alt="" />
          </div>
          <div className="lg:flex items-center justify-center sm:justify-between gap-2  order-1 lg:order-3 hidden">
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg5} className="" alt="" />
              </div>
            </div>{" "}
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg6} className="" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg7} className="" alt="" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 sm:w-20 rounded-full border-4 border-orange-600">
                <img src={LeftImg8} className="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
// className="w-12 sm:w-20 rounded-full border-4 border-orange-600"
