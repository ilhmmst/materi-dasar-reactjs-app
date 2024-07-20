
// 2. Looping itu perulangan data untuk pengeluaran data dari array/objek
// jikalau menggunakan .map(busana/minuman) harus menggunakan key
// biar kaga eror di console.lognya

function Awal2() {
  // Ini Array
  const menuMinuman = ["Sepatu", "Baju", "Denim"];

  // Ini Object
  const menuBusana = [
    { nama: "Sepatu", harga: "Rp. 550.000", jumlah: "2" },
    { nama: "Baju", harga: "Rp. 130.000", jumlah: "3" },
    { nama: "Denim", harga: "Rp. 250.000", jumlah: "5" },
  ];

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Looping</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw Looping itu perulangan, untuk pengeluaran data dari array/objek,
              ada hal penting disini untuk penggunaan .map kita harus
              menggunakan key
            </p>
            <b>INGET KALO PAKE .map PAKE KEY</b>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Array</h3>
              <p>Pembuatan Array</p>

              <div className="right">
                {menuMinuman.map((minuman, key) => {
                  return (
                    <div key={key}>
                      <div>
                        <b>Produk : </b>
                        <em>{minuman}</em>
                      </div>
                    </div>
                  );
                })}
              </div>

              <em>
                Silahkan Otak Atik pada bagian minuman,key
              </em>
            </div>
            <div className="example-right">
              <h3>Object</h3>
              <p>
                Penggunaan object disini gw mengambil data dari daleman array
              </p>

              <div className="right">
                {menuBusana.map((busana, kunci) => {
                  return (
                    <div key={kunci}>
                      <div>
                        <b>Produk : </b>
                        <em>{busana.nama}</em>
                      </div>
                      <div>
                        <b>Harga : </b>
                        <em>{busana.harga}</em>
                      </div>
                      <div>
                        <b>Sisa Barang : </b>
                        <em>{busana.jumlah}</em>
                      </div>
                    </div>
                  );
                })}
              </div>

              <em>
                Silahkan Otak Atik pada bagian busana,kunci,nama,harga,jumlah
              </em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Awal2;
