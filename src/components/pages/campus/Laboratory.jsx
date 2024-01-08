import Gallery from "react-photo-gallery";

import img4 from "../../../assets/campus/4.jpg";

import img10 from "../../../assets/campus/10.jpg";
import img11 from "../../../assets/campus/11.jpg";

const Laboratory = () => {
  const photos = [
    {
      src: img4,
      width: 3,
      height: 1,
    },
    {
      src: img11,
      width: 2,
      height: 1,
    },
    {
      src: img10,
      width: 3,
      height: 2,
    },
  
    
  ];
  return (
    <div id="laboratory" className="mb-20">
      <h1 className="text-3xl font-semibold text-center my-5 text-orange-500">
        Laboratories
      </h1>
      <p className="text-center my-5">
        We have separate lab facilities for Physics, Chemistry, Biology,
        Mathematics & Computer Science
      </p>
      <div>
        <Gallery photos={photos} />
      </div>
    </div>
  );
};

export default Laboratory;
