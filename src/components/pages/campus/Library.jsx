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

const Library = () => {
  const photos = [
    {
      src: img8,
      width: 4,
      height: 3,
    },
    {
      src: img7,
      width: 1,
      height: 1,
    },
    {
      src: img12,
      width: 4,
      height: 3,
    },
    {
      src: img11,
      width: 1,
      height: 1,
    },
    {
      src: img6,
      width: 4,
      height: 3,
    },
    {
      src: img13,
      width: 1,
      height: 1,
    },
  ];
  return (
    <div id="library" className="mb-20">
      <h1 className="text-3xl font-semibold text-center my-5 text-orange-500">
        Library
      </h1>
      <p className="text-center my-5">
        We have library facility for all level students with opportunities to
        learn how to utilize materials in a variety of formats to access
        information so that they can continue lifelong learning. It helps
        increase students' interest in reading, viewing, and using information
        and ideas.
      </p>
      <div>
        <Gallery photos={photos} />
      </div>
    </div>
  );
};

export default Library;
