import Gallery from "react-photo-gallery";
import img1 from "../../../assets/campus/1.jpg";
import img2 from "../../../assets/campus/2.jpg";
import img3 from "../../../assets/campus/3.jpg";
import img4 from "../../../assets/campus/4.jpg";
import img5 from "../../../assets/campus/5.jpg";
import img6 from "../../../assets/campus/6.jpg";
import img7 from "../../../assets/campus/7.jpg";
import img8 from "../../../assets/campus/8.jpg";
import img9 from "../../../assets/campus/9.jpg";
import img10 from "../../../assets/campus/10.jpg";
import img11 from "../../../assets/campus/11.jpg";
import img12 from "../../../assets/campus/12.jpg";
import img13 from "../../../assets/campus/13.jpg";

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
    {
      src: img8,
      width: 2,
      height: 1,
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
