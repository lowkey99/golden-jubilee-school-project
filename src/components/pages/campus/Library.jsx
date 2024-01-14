import Gallery from "react-photo-gallery";
import img1 from "../../../assets/campus/library/1.jpeg";
import img2 from "../../../assets/campus/library/2.jpeg";
import img3 from "../../../assets/campus/library/3.jpeg";
import img6 from "../../../assets/campus/library/6.jpeg";
import img4 from "../../../assets/campus/library/4.jpeg";
import img5 from "../../../assets/campus/library/5.jpeg";


const Library = () => {
  const photos = [
    {
      src: img4,
      width: 4,
      height: 3,
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
        information so that they can continue lifelong learning. It helps to
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
