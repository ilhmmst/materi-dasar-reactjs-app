import { useEffect, useState } from "react";
import Hook4b from "./Hook4b";

function Hook4a() {
  console.log(('4a rendered'))
  const [nilai, setNilai] = useState(0);
  const [nama, setNama] = useState("Ilham");

  let newNilai = nilai;
  let newNama = "";

  function tambahNilai() {
    newNilai = nilai + 1;
    console.log(`Nilai Sebelumnya ${nilai}`);
    setNilai(newNilai);
  }

  function gantiNama() {
    console.log(`Nama Selanjutnya ${nama}`);
    if (nama == "Ilham") {
      newNama = "8think";
    } else {
      newNama = "Ilham";
    }
    setNama(newNama);
  }

  // useEffect(() => {
  //   console.log(`Sekarang Nilai Kamu ${nilai} | Sekarang Nama Kamu ${nama}`);
  // }, [nilai]);

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Memo</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw kaya pemanggilan data sebelumnya ke file selanjutnya
              dah, Akan tetapi ini disini si file 4anya ini di kasih rendered
            </p>
            <b>INGETT INI ITU FUNGSINYA UNTUK MEMINIMALISIRRR file</b>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Pemanggilan 2 file</h3>

              <div className="left">
                <h3>Ini file 4a</h3>
                <button onClick={tambahNilai}>Nilai Bertambah</button>
                <h3>{nilai}</h3>
                <h3>{nama}</h3>
                <button onClick={gantiNama}>Ganti Nama</button>
                <Hook4b nama={nama}/>
              </div>

              <em>Silahkan Otak Atik pada bagian file Hook4b</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hook4a;
