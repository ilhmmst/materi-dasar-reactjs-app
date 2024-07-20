import Awal1 from "./Pengenalan Awal/Awal1";
import Awal2 from "./Pengenalan Awal/Awal2";
import Awal3 from "./Pengenalan Awal/Awal3";
import Awal4 from "./Pengenalan Awal/Awal4";
import Hook1 from "./Pengenalan Hook/Hook1";
import Hook2 from "./Pengenalan Hook/Hook2";
import Hook3 from "./Pengenalan Hook/Hook3";
import Hook4a from "./Pengenalan Hook/Hook4a";
import Hook5a from "./Pengenalan Hook/Hook5a";
import Hook6 from "./Pengenalan Hook/Hook6";
import Hook7 from "./Pengenalan Hook/Hook7";

function Tahapan1() {

  return (
    <>
      {/* Pengenalan Awal */}
      <Awal1 /> {/* Conditional Rendering */}
      <Awal2 /> {/* Looping */}
      <Awal3 hari="Senin" mood="Sedih" /> {/* Prop / Properties */}
      <Awal4 /> {/* OnClickEvent */}

      {/* Pengenalan Hook dasar itu meliputi dibawah ini*/}
      <Hook1 /> {/* UseState */}
      <Hook2/> {/* UseEffect */}
      <Hook3/> {/* UseMemo */}
      <Hook4a/> {/* Memo */}
      <Hook5a/> {/* UseCallBack */}
      <Hook6/> {/* UseReff */}    
      <Hook7/> {/* UseContext */}
    </>
  );
}

export default Tahapan1;
