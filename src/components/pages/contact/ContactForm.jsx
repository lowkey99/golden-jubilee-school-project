import { FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiLink } from "react-icons/hi";

function ContactForm() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2">
        {/* contact information form */}
        <div className="bg-blue-800 p-8">
          <div className="flex justify-between">
            <h2 className="text-white text-xl">Contact Information</h2>
          </div>
          <div className="mt-6 flex flex-row gap-5">
            <div className="">
              <FaAddressBook className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-slate-200 text-xs">Address :</h2>
              <address className="text-white text-xs">
                249A, Kamakoti Nagar 1st Main Road, Pallikaranai, Chennai 100.
              </address>
            </div>
          </div>

          <div className="mt-4 flex flex-row gap-5">
            <div>
              <MdEmail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-slate-200 text-xs">Email :</h2>
              <p className="text-white text-xs">
                ssbvgjs.pallikaranai@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-row gap-5">
            <div >
              <BsTelephoneFill className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-slate-200 text-xs">Phone :</h2>
              <p className="text-white text-xs">+91 44 4860 3336/3337</p>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-5">
            <div >
              <HiLink className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-slate-200 text-xs">Visit Us :</h2>
              <a href="http://ssbvgjs.com/" className="text-white text-xs" target="_blank" rel="noopener noreferrer">ssbvgjs.com</a>
            </div>
          </div>
        </div>

        {/* contact us form */}
        <div className="bg-[#f7f7f7] p-8 md:hover:scale-y-110 transition">
          <h2 className="text-black text-xl">Contact Us</h2>
          <form className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-slate-900 text-xs mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="px-3 py-2 w-full rounded-md bg-gray-200 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-slate-900 text-xs mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="px-3 py-2 w-full rounded-md bg-gray-200 border-2 border-gray-300  focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-slate-900 text-xs mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="px-3 py-2 w-full rounded-md bg-gray-200 border-2 border-gray-300  focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
