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

const GalleryPhoto = () => {
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
      src: img3,
      width: 4,
      height: 3,
    },
    {
      src: img4,
      width: 1,
      height: 1,
    },
    {
      src: img5,
      width: 4,
      height: 3,
    },
    {
      src: img6,
      width: 1,
      height: 1,
    },
    {
      src: img7,
      width: 4,
      height: 3,
    },
    {
      src: img8,
      width: 1,
      height: 1,
    },
    {
      src: img9,
      width: 4,
      height: 3,
    },
    {
      src: img10,
      width: 1,
      height: 1,
    },
    {
      src: img11,
      width: 4,
      height: 3,
    },
    {
      src: img12,
      width: 1,
      height: 1,
    },
    {
      src: img13,
      width: 1,
      height: 1,
    },
  ];
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className="text-3xl mb-10 font-semibold text-center text-orange-500">
          Gallery
        </h1>
        <div>
          <Gallery photos={photos} />
        </div>
      </div>
    </div>
  );
};

export default GalleryPhoto;
