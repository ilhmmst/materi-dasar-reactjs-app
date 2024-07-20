import { useEffect, useState } from "react";

// 6. UsseEffect
function Hook2() {
  const [nilai, setNilai] = useState(0);
  const [nama, setNama] = useState("Ilham");

  useEffect(() => {
    console.log(`Sekarang nilai kamu ${nilai} | Sekarang Nama kamu ${nama}`);
  },[]);

  // tulis nilai => [nilai] maka akan muncul nilainya, sedangkan namanya lagi di proses penampungan
  // tulis nama => [nama] maka akan muncul namanya, sedangkan nilainya lagi di proses penampungan

  // kalo mau di tampilkan ke 2" [nilai,nama]
  // kalo [] dikosongin barti si nama dan nilainya ini lagi berada di penampungan

  let newNama = "";

  function gantiNama() {
    if (nama == "Ilham") {
      newNama = "8Think";
    } else {
      newNama = "Ilham";
    }
    setNama(newNama);
  }

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Use Effect</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw itu, digunakan untuk menangani hal lain yg hrus
              dilakukan oleh komponen setelah proses rendered terjadi
            </p>
            <b>
              Kalo mau liat cara kerjanya liat pada bagian consolenya, liat lagi
              blay ini tu fungsinya buat MENANGANI RENDERED / MENAMPUNG DATA
              INGET LAGI MENAMPUNG DATAAAAA
            </b>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Kuantitatif dan Kualitatif</h3>
              <li>kuantitatif itu yang angka</li>
              <li>kulitatif itu yang huruf</li>
              <em>
                jadi tu kalo misalkan kita pencet ganti nama gabakalan ke
                rendered si nilainya soalnya lagi berada di penampungan si
                useeffectnya ini
              </em>
              <b>
                maksudnya gabakal direndered soalnya lagi di tampung IngET INI
                ITU PENAMPUNGAN DATA RENDEREDnya
              </b>
              <em>rendered itu ibarat loading...............</em>

              <div className="left">
                <button onClick={() => setNilai((prev) => prev + 1)}>
                  Nilai Bertambah
                </button>
                <button onClick={() => setNilai((prev) => prev - 1)}>
                  Nilai BerKureng
                </button>
                <h3>{nilai}</h3>
                <h3>Sekarang Nama Kamu {nama}</h3>
                <button onClick={() => gantiNama()}>Ganti Nama</button>
              </div>

              <em>
                Silahkan Otak Atik pada bagian ,[ nilai / nama ] serah lu mao
                direndered yang mana SEKARANG KONDISINYA LAGI DEFAULT 
              </em>
              <b>
                kalo di matiin ,[ ] itunya bakalan muncul banyak ihh pusing dah
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hook2;
