import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

function Child1() {
  const data = useContext(Context);
  return (
    <>
      <div className="left">
        <h3>Layer 1</h3>
        <h1>Child 1 : Halo {data.nama}</h1>
        <Child2 />
      </div>
    </>
  );
}

function Child2() {
  const data = useContext(Context);
  return (
    <>
      <div className="left">
        <h3>Layer 2</h3>
        <h1>Child 2 : Halo {data.nama}</h1>
        <Child3 />
      </div>
    </>
  );
}

function Child3() {
  const data = useContext(Context);
  function gantiNama() {
    if (data.nama == "Ilham Setiawan") {
      data.setNama("Kojay");
    } else {
      data.setNama("Ilham Setiawan");
    }
  }
  return (
    <>
      <div className="left">
        <h3>Layer 3</h3>
        <p>Pusat kontrolnya itu disini nge </p>
        <b>Coba dah nge lu liat codingan biar tipis" paham</b>
        <em>gada console"an asli ga boong jan pake k tapi</em>
        <h1>
          Child 3 : Halo {data.nama} Umur Kamu {data.umur}{" "}
        </h1>
        <button onClick={gantiNama}>Ganti Nama</button>
      </div>
    </>
  );
}

const Context = createContext();
function Hook7() {
  const [nama, setNama] = useState("Ilham Setiawan");
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Use Context</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw Use Context itu kaya pemanggilan dari layer ke layer
              gitu coy dalam 1 file gitu deh, jadi gausah pake 2 file kaya
              useCallback dan memo
            </p>
            <b>Pemanggilan usecontext ini harus memakai createContext</b>
            <li>
              <b>jadi usecontext itu sepaket sama creteContext</b>
            </li>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Ini Layernya</h3>
              <p>Dibagian pemanggilan Context di tambahin .provider</p>
              <b>
                lu ngerti gasi ke ini itu pemanggilan oy am engga, bukan gitu
              </b>
              <p>
                kaya lu punya ni 1 file trus didlemnya kan biasanya buat
                functionnya 1kan, nah disini itu bisa banyak function gitu coy
              </p>
              <b>inget nge pake kalo pemanggilan context harus pake .provider</b>
              <b>inget lagi useContext Sepaket ama Si creteContext</b>
              <b>inget lagi useContext Sepaket ama Si creteContext</b>
              <b>inget lagi useContext Sepaket ama Si creteContext</b>
              <b>inget nge pake kalo pemanggilan context harus pake .provider</b>

              <div className="left">
                <Context.Provider value={{ nama, setNama, umur: 21 }}>
                  <Child1 />
                </Context.Provider>
              </div>

              <em>Silahkan Otak Atik pada bagian yang lu pengen</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hook7;
