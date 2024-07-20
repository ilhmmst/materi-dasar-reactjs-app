
// 1. Conditional Rendering mengenalkan kepada ternary operator dan and operator

function Awal1() {
  const menuMinuman = true;
  // ? ini adalah ternary operator
  // penggunaan ternary operator digunakan untuk mengetahui true dan false
  // kalo menggunakan tenary operator
  // menggunakan tanda ? dan penambahan tanda : untuk falsenya
  // contonya  {(menuMakanan == true) ? (<div>Tipe: Makanan</div>) : (<div>Tipe: Minuman</div>)}

  const menuMakanan = true;
  // && ini adalah nn operator
  // penggunaan nn operator digunakan untuk mengetahui nilai true dan falsenya ae
  // contohnya  {(menuMakanan == true) && (<div>Tipe: Makanan</div>)}
  // penggantian true dan false lebih mudah untuk digunakan, dikarenakan
  // pada bagian untuk menganti true dan false di const menuMakanan = (true/false)
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Conditional Rendering</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw Conditional Rendering itu, mengenalkan kepada ternary
              operator dan and operator kaya semacam nilai true / false
            </p>
            <p></p>
          </div>
          <div className="container-example">
            <div className="example-left">
              {/* Penggunaan ? (ternary) operator */}
              <h3>Ternary Operator</h3>
              <p> ? untuk truenya</p>
              <p> : untuk falsenya</p>

              <div className="left">
                <b>Nama Minuman : Es Jeruk</b>

                {menuMinuman == true ? (
                  <div>Jenis : Minuman</div>
                ) : (
                  <div>Jenis : Makanan</div>
                )}
              </div>

              <em>Silahkan Otak Atik pada bagian true dan falsenya</em>
            </div>
            <div className="example-right">
              {/* Penggunaan && (nn) operator */}
              <h3>And Operator</h3>
              <p> && untuk truenya
                untuk falsenya sendiri dia langsung di ubah pada codingan karena
                and operator ini bersifat true ae
              </p>

              <div className="right">
                <b>Nama Makanan :</b>
                <em> Nasi Bakar</em>
                {menuMakanan == true && <div>Jenis : Makanan</div>}
              </div>

              <em>Silahkan Otak Atik pada bagian true dan falsenya</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awal1;
