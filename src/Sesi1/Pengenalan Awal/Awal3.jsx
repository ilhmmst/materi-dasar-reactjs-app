// 3. Props
// fungsinya untuk pengambilan data dari app.js
// yang dimana nama dari hari dan mood nya itu adalah props

function Awal3(prop) {
  // buat yang right
  // Tiga() => (prop)
  // bisa juga

  // buat yang left
  // TIga() => ({hari,mood})
  // pemaggilan props digunakan pake {}
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Props</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw Props itu kepanjanganya dari proprties pengambilan pake
              secara langsung dan dipilih lah pokonya props ini berada di file
              utama
              {/* <Namafile prop /> */}
            </p>
            <b>
              prop anjing bukan props gausah so inggris tarsalah di codingan
            </b>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Prop</h3>
              <p>
                nah pada props disini tiggal panggil propnya aja yang udah di
                buat
              </p>

              <div className="left">
                <em>Silahkan ubah di codingan biar tau</em>
                {/* Hari : {hari} / Mood : {mood} */}
              </div>

              <em>Silahkan Otak Atik pada bagian propnya</em>
            </div>
            <div className="example-right">
              <h3>Prop</h3>
              <p>
                nah pada props disini di tulis prop lalu lalukan penegasan pada
                props yang sudah di buat. ( liat codingan )
              </p>

              <div className="right">
                Hari : {prop.hari} / Mood : {prop.mood}
              </div>

              <em>Silahkan Otak Atik pada bagian prop</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awal3;
