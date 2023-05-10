import img from "../../../assets/campus/4.jpg";

const Curriculum = () => {
  return (
    <div
      id="curriculum"
      className="mx-4 md:mx-24 lg:mx-0 xl:mx-0 2xl:mx-0 mt-3"
    >
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <h1 className="text-4xl font-bold mt-10 mb-14">ACADAMICS</h1>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h1 className="mb-5 text-2xl font-semibold">CURRICULUM</h1>

            <p className="mb-6 text-gray-900">
              SSBVGJS follows the CBSE curriculum which has been framed to be
              child centric. The children are encouraged to be independent,
              thereby developing their critical thinking and problem-solving
              skills. Activity-based approaches are adapted to make learning an
              enjoyable part of the child’s life. Continuous and Comprehensive
              Evaluation is done throughout the year as per norms laid by the
              Central Board. We have a grading system for assessing the overall
              performance of children. The academic year is divided into 2
              terms. We believe in giving more emphasis on the child’s
              listening, speaking and reading skills, thereby improving his/her
              writing skills. Up to VIII standard we offer both Tamil & Hindi as
              second Language. For class IX 2023-24 batch Tamil is the Mandatory
              Second language. For the Present X Batch (2023-24) we offer Tamil,
              Hindi & Sanskrit.
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
