const Map = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="pb-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
            Google Map
          </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4678931144676!2d80.20723678465752!3d12.941884282982356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c4aefffffff%3A0x9534a08c4ffaa1b!2sSREE%20SANKARA%20BALA%20VIDYALAYA%20GOLDEN%20JUBILEE%20SCHOOL%20%26%20JUNIOR%20COLLEGE!5e0!3m2!1sen!2sbd!4v1683223992420!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
