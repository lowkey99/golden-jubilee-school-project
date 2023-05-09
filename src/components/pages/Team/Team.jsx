import AcademicsTeam from "./AcademicsTeam";
import AdminRole from "./AdminRole";
import CoSchoolTeam from "./CoSchoolTeam";
import HouseKeeping from "./HouseKeeping";
import Leader from "./Leader";
import TransportTeam from "./TransportTeam";

const Team = () => {
  return (
    <>
      <Leader />
      <AcademicsTeam />
      <CoSchoolTeam />
      <AdminRole />
      <HouseKeeping />
      <TransportTeam />
      
    </>
  );
};

export default Team;
