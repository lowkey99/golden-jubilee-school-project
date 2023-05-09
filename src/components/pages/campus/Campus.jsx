import ClassRoom from "./ClassRoom";
import Laboratory from "./Laboratory";
import Library from "./Library";

const Campus = () => {
  return (
    <div className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 my-3 sm:my-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <ClassRoom />
        <Library />
        <Laboratory />
      </div>
    </div>
  );
};

export default Campus;
