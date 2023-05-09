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

const ClassRoom = () => {
  const photos = [
    {
      src: img1,
      width: 4,
      height: 3,
    },
    {
      src: img2,
      width: 1,
      height: 1,
    },
    {
      src: img5,
      width: 4,
      height: 3,
    },
    {
      src: img12,
      width: 3,
      height: 2,
    },
    {
      src: img9,
      width: 4,
      height: 2,
    },
  ];
  return (
    <div id="class-room" className="mb-20">
      <h1 className="text-3xl font-semibold text-center text-orange-500">
        CLASS ROOM
      </h1>
      <p className="text-center my-5">
        The school has spacious classrooms with proper ventilation.
      </p>
      <div>
        <Gallery photos={photos} />
      </div>
    </div>
  );
};

export default ClassRoom;
