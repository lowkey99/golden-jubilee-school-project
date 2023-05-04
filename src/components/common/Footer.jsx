import { Link } from "react-router-dom";
import Logo from "../../assets/SSBV(1).png";

const Footer = () => {
  return (
    <div className="bg-[#121212]">
      <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center sm:text-start">
          <div className="lg:col-span-2">
            <Link to="/" className="">
              <img className="" src={Logo} alt="" />
            </Link>
          </div>
         
          <div className="">
            <h2 className="text-[2rem] text-[#ebebec] mb-3">Quick Menu</h2>
            <div className="flex flex-col gap-2">
              <Link to="/new" className="hover:underline">
                Paren Portal
              </Link>
              <Link to="/new" className="hover:underline">
                Our Founder
              </Link>
              <Link to="/new" className="hover:underline">
                Our Vision and Mission
              </Link>
              <Link to="/new" className="hover:underline">
                Careers
              </Link>
              <Link to="/new" className="hover:underline">
                Latest News
              </Link>
              <Link to="/new" className="hover:underline">
                Gallery
              </Link>
            </div>
          </div>
          <div className="">
            <h2 className="text-[2rem] text-[#ebebec] mb-3">Contact Info</h2>
            <div className="flex flex-col gap-2">
              <address>
                249A, Kamakoti Nagar 1st Main Road, Pallikaranai, Chennai 100.
                Ph: +91 44 4860 3336/3337
              </address>
              <p>Email: ssbvgjs.pallikaranai@gmail.com </p>
              <p>Visit Us: <a href="https://www.ssbvgjs.com" className="hover:underline text-sky-600" target="_blank" rel="noopener noreferrer"> ssbvgjs.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
