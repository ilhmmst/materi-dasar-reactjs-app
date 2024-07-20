import { useCallback, useEffect, useState } from "react";
import Hook5b from "./Hook5b";

function Hook5a() {
  console.log("5a redeered");
  const [nama, setNama] = useState("Ilham");
  const [nilai, setNilai] = useState(0);

  let newNama = "";

  const gantiNama = useCallback(() => {
    console.log(`berhasil ${nama}`);
    if (nama == "Ilham") {
      newNama = "Kojay";
    } else {
      newNama = "Ilham";
    }
    setNama(newNama);
  },[]);

  // inget depedencies itu buat memunculkan data yang diinginkan

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Use CallBack</h1>
          </div>
          <div className="caption">
            <p>Menurut gw itu kaya casingg gitu coii, kita harus bikin 2 file biar keliatan hasilnya</p>
            <b>INGET INI ITU CASING</b>
            <li>untuk menampung data kalo datanya itu sama </li>
            <b>inget kalo datanya sama ga bakal kerendered lagi</b>
            <li><b>inget kalo datanya sama ga bakal kerendered lagi</b></li>
            <li><b>inget kalo datanya sama ga bakal kerendered lagi</b></li>
            <li><b>inget kalo datanya sama ga bakal kerendered lagi</b></li>
            <li>coba klik pada bagian ganti nama terus menerus </li>
            <li>liat perubahan pada console</li>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Ternary Operator</h3>

              <div className="left">
                <button onClick={() => setNilai((prev) => prev - 1)}>
                  Nilai Berkureng
                </button>
                <h3>{nilai}</h3>
                <h3>{nama}</h3>
                <button onClick={gantiNama}>Ganti Nama</button>
                <Hook5b name={nama} aksi={gantiNama} />
              </div>

              <em>Silahkan Otak Atik pada bagian yang ada usebacknya depedenciesnya lu maenin</em>
              <li>[ ]tulis nama </li>
              <li>[ ]tulis nilai </li>
              <li>[ ]tulis kosong itu berada dikondisi default ini fungsinya kegunaannya maknannya dimari taii </li>
              <li>kalo di delete depedenciesnya lu bakalan pusing asli gaboong </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hook5a;
