import Map from "../Home/Map";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <center>
          <h1 className=" text-center px-3 py-1 border inline-block rounded-full">
            Contact Us
          </h1>
        </center>
        <Map />

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
