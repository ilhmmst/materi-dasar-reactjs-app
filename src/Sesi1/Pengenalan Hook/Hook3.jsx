// Use Memo

import { useEffect, useMemo, useState } from "react";

function Hook3() {
  const [nama, setNama] = useState("ilham");
  const [nilai, setNilai] = useState(0);

  let newNama = "";
  let newNilai = nilai;

  function gantiNama() {
    console.log(`Selanjutnya Nama Kamu ${nama}`);
    newNama = nama;
    if (nama == "Ilham") {
      newNama = "Kojay";
    } else {
      newNama = "Ilham";
    }
    setNama(newNama);
  }

  function tambahNilai() {
    newNilai = nilai + 1;
    console.log(`Sebelumnya Nilai Kamu ${nilai}`);
    setNilai(newNilai);
  }
  
  // ini sengaja gw komen si use effectnya
  // coba matiin salah satu biar bisa liat cara kerjanya
  
  // useEffect(() => {
  //   console.log(`Sekarang nilai kamu ${nilai} | Sekarang Nama kamu ${nama}`);
  // }, [nilai]);

  useMemo(() => {
    console.log(`Sekarang nilai kamu ${nilai} | Sekarang Nama kamu ${nama}`);
  },[nama]);

  // [] dalemannya data yang mau ditampilin 
  // kalo di kosongin barti data kedua"nya ga ditampilin
  // kalo di apus barti data keduanya ditingkatin performanya
  
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Use Memo</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw kenya sama kaya use effect cuma pusing disini gw gimana
              ya jabarinnya sebat dulu deh
            </p>
            <b>
              Nah poinnya ini use memo itu buat ningkatin performa kayanya
              mahh.. codingannya sama kaya use effect tiggal diganti aja jadi
              use memo INGET USE MEMO INGET BUAT NINGKATIN PERFORMA 
            </b>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Gw sama in kaya use effect aja dah</h3>

              <div className="left">
                <h3>Sekarang Nama Kamu {nama}</h3>
                <button onClick={() => gantiNama()}>Ganti Nama</button>
                <button onClick={tambahNilai}>Nilai Bertambah</button>
                <h3>{nilai}</h3>
              </div>

              <em>Silahkan Otak Atik pada bagian useeffect dan usememo biar liat perbedaannya </em>
              <li>kalo use effect munculnya 1x</li>
              <li>kalo use memo munculnya 2x</li>
              <li>[nama] akan menigkatkan performa si namanya, sedangkan si nilai berada di penampungan</li>
              <li>[nilai] akan menigkatkan performa si nilainya, sedangkan si nama berada di penampungan</li>
              <b>inget ini buat ningkatin performa </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hook3;
