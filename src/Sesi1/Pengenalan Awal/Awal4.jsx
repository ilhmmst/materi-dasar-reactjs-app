// 5. OnclickEvent untuk menampilkan button isian button
// kalo pake parameter harus pake arrow function =>
// parameter itu yang (iniparameter)

function Awal4() {
  // ini buat yang pake parameter
  function onclickLeft(nama) {
    alert(`berhasil ${nama}`);
    console.log("asdas");
  }

  // ini buat yang gapake parameter
  function onclickRight() {
    alert("berhasil");
    console.log("asd");
  }
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>OnclickEvent</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw itu, menampilkan isian pada button harus pake button si
              kayanya
            </p>
            <b>
              bikinnya buat button isiin onclick, panggil pake function nama
              onclicknya, terus test pake console.log('test') ,akan tetapi
              kedepannya harus pake parameter dan arrow function biar sedapp
              diliatnya
            </b>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Ini pake parameter</h3>
              <p>
                ini pake arrow function, <em>liat dicodingan</em>
                onclick('ilham') itu bikin variabelnya terus panggil didalem
                (nama)
              </p>

              <div className="left">
                <button onClick={() => onclickLeft("ilham")}>Klik Dong</button>
              </div>

              <em>Silahkan Otak Atik pada bagian codingan</em>
            </div>
            <div className="example-right">
              <h3>Ini ga pake parameter</h3>
              <p>
                ini gapake arrow function, <em>liat dicodingan</em> langsung
                bikin nama onclicknya aja terus panggil deh
              </p>

              <div className="right">
                <button onClick={onclickRight}>Klik Dong</button>
              </div>

              <em>Silahkan Otak Atik pada bagian codingan</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awal4;
