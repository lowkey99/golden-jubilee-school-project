import AcademicsTeam from "./AcademicsTeam";
import AdminRole from "./AdminRole";
import CoSchoolTeam from "./CoSchoolTeam";
import HouseKeeping from "./HouseKeeping";
import Leader from "./Leader";
import Office from "./Office"
import TransportTeam from "./TransportTeam"


const Team = () => {
  return (
    <>
      <Leader />
      <AcademicsTeam />
      <CoSchoolTeam />
      <AdminRole />
      < Office/>
      <HouseKeeping />
      < TransportTeam />
      
      
    </>
  );
};

export default Team;
