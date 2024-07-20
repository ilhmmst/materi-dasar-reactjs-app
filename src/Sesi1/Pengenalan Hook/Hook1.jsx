import { useState } from "react";

function Hook1() {
  // ketik usestate dimari
  // terus bikin dalemannya jangan lupa pake koma dan set =

  // 2.
  const [nilaiAtas, setNilaiAtas] = useState(0);
  const [nilaiBawah, setNilaiBawah] = useState(0);

  // 3. pakein new
  let newnilaiAtas = 0;
  let newNilaiBawah = 0;

  //   1.
  function onClickAtas() {
    // 4. (ambil data di usestatnya yaang warna kuning)
    // 4. disini bisa di ganti +/-
    newnilaiAtas = nilaiAtas + 1;
    console.log(`Nilai Bertambah ${nilaiAtas}`);
    // 5. (ambil data di usestatenya yang warna biru)
    // 6. ambil ada yang warna kuning taro di h3
    setNilaiAtas(newnilaiAtas);
  }

  function onClickBawah() {
    newNilaiBawah = nilaiBawah - 1;
    console.log(`Nilai Berkurang ${nilaiBawah}`);
    setNilaiBawah(newNilaiBawah);
  }

  // Versi Gampang
  const [nilaiAtasan, setNilaiAtasan] = useState(0);
  // 1.
  // const [nilaiBawahan, setNilaiBawahan] = useState(0);
  // 2. pada onclick pake arrow function () => setnamanya()
  // 3. setnama() jadi setnama(nilaiNamanya + 1)
  // 4.panggil ke h3 {nilaiNamanya}

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>UseState</h1>
          </div>
          <div className="caption">
            <p>Menurut gw.... pukimai la gw lupa, </p>
            <b>
              Pembuatan si UseState ini lu pokonya ketik aja usestate di bawah
              function tar muncul import blablabla barti udah konek itu
              UseStatenya
            </b>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Versi Ribet</h3>
              <p>
                Disini bikinnya ribet bat dah, awalnya...
                <li> Liat angka di codingan </li>
              </p>

              <div className="left">
                <button onClick={onClickAtas}>Nilai Bertambah</button>
                <h3>{nilaiAtas}</h3>
                <h3>{nilaiBawah}</h3>
                <button onClick={onClickBawah}>Nilai Bekureng</button>
              </div>

              <em>
                Silahkan Otak Atik pada bagian functionnya gimana h3 biar
                disatuin
              </em>
            </div>
            <div className="example-right">
              <h3>Versi Gampang</h3>
              <p>Disini versi gampang bat asli gaboong </p>
              <li>Bikin onclicknya dulu jangan upa pake arrow function</li>
              <li>Abis itu liat di codingan sesuai nomor</li>

              <div className="right">
                <button onClick={() => setNilaiAtasan(nilaiAtasan + 1)}>
                  Nilai Bertambah
                </button>
                <h3>{nilaiAtasan}</h3>
                <button onClick={() => setNilaiAtasan((prev) => prev - 1)}>
                  {/* disini di gunain prev untuk biar langsung masuk kepada usestatenya */}
                  Nilai Berkureng
                </button>
              </div>

              <em>Silahkan Otak Atik pada bagian nilai atasan </em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hook1;
