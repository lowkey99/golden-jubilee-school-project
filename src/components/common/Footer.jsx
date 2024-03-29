import { Link } from "react-router-dom";
import Logo from "../../assets/down.png";


const Footer = () => {
  const year = new Date().getFullYear();
  const name = " Metawebix";
  return (
    <div className="bg-[#121212]">
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center sm:text-start footermark">
          <div className="lg:col-span-2 logomark">
            <Link to="/" className="">
              <img className="" src={Logo} alt="" />
            </Link>
          </div>
         
          
          <div className="">
            <h2 className="text-[2rem] text-[#ebebec] mb-3">Contact Info</h2>
            <div className="flex flex-col gap-2">
              <address>
                249A, Kamakoti Nagar 1st Main Road, Pallikaranai, Chennai 100.<br></br>
               <a href="tel:+919498038238"> Ph: +91 94980 38238</a><br/>
               <a href="tel:+914448603337"> Ph: +91 44 4860 3337</a>
               
              </address>
              <a href="mailto:Email : ssbvgjs.pallikaranai@gmail.com">Email: ssbvgjs.pallikaranai@gmail.com </a>
              <p>Visit Us: <a href="https://www.ssbvgjs.net" className="hover:underline text-sky-600" target="_blank" rel="noopener noreferrer">www.ssbvgjs.net</a></p>
            </div>
          </div>
        </div>
        <p className="text-center text-white mt-10  ">
        Copyright &copy; {year}, All Right Reserved By
                      <a
                        href="https://www.metawebix.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600"
                      >
                        {name}
                      </a>
          </p>
      </div>
    </div>
  );
};

export default Footer;
