
import { memo } from "react";

function Hook5b({name,aksi}) {
  console.log("5b rendered");
  return (
    <>
      <div className="left">
        <h3>Ini dari 5b</h3>
        <h3><u>{name}</u></h3>
        <em>oiya disini gw pake memo biar ngulang materi aja sama gw tambahin prop biar keren </em>
        <button onClick={aksi}>Ganti Nama</button>
      </div>

    </>
  );
}
// export default Hook5b;
export default memo(Hook5b);
