import Infrastructure   from "../../../assets/campus/6.jpg";

const HomeInfrastructure = () => {
    const cardDetails = [
        {
            id: "101",
            img: "",
            title: "Smart Class",
            details: ""
        }
    ]
  return (
    <>
    <div  style={{
      backgroundImage: `url(${Infrastructure})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "560px",
    }}>
    </div>
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0">
      <div className="py-10 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <div>
            <h1 className="text-4xl font-bold text-center text-orange-500">Infrastructure & Facilities</h1>
            <div className="grid grid-cols-3 gap-10">
                
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeInfrastructure;
