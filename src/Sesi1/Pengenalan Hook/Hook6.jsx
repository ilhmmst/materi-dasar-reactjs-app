import { useRef } from "react";

function Hook6() {
  const message = useRef(null);
  //   si displayPesan ini untuk menampilkan ke html tapi jangan lupa tambahin innerHTML itu point pentingnya
  const displayMessage = useRef(null);

  function clickMe() {
    console.log(message.current.value);
    displayMessage.current.innerHTML = message.current.value;
    // ini lhoo innerHTML = message.current.value
    // message.current.value ini itu yang tadi diconsole.log
    // panggilnya pake ref bukan pake pemanggilan js biasanya langsung pake {}
    // tapi ref = {displayPesan}
    // pahaamm ga lu
  }
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="main">
            <h1>Use Ref</h1>
          </div>
          <div className="caption">
            <p>
              Menurut gw useref itu digunain untuk memodifikasi / membaca
              properti elemen dom{" "}
            </p>
            <b>jadi itu si useref ini untuk memunculkan data</b>
            <p>dan cara memakainya </p>
            <li>bikin input dan button dulu</li>
            <li>
              bikin variabel const asdads = useref(null), kenapa null biar si
              nilai string ini kosongan kaya dengkul lu itu
            </li>
            <li>kasih onclick di button</li>
            <li>
              <b>kasih ref diinput inget ref fnya 1 jangan 2 </b>
            </li>
            <li>cek button pake console.log</li>
            <li>
              cek button kek biasanya, nah pada bagian consoleg.log (dalemannya
              dipanggil variabel si input yang udah dibuat tadi tu)
            </li>
            <li>
              nah cek pada bagian console log ada tulisan current pokonya truuss
              lu klik lagi ada tulisan value, nahh si valuesnya ini itu isiannya
            </li>
            <b>Nh gimana si may biar tampil ke htmlnya</b>
            <p>cek codingan terus pahamin</p>
          </div>
          <div className="container-example">
            <div className="example-left">
              <h3>Semoga paham ilham </h3>
              <p>disini gw pake input dan button</p>

              <div className="left">
                <h1 ref={displayMessage}>SIlahkan Ketik Pesan</h1>
                <input type="text" ref={message} placeholder="Ketik Pesan" />
                <button onClick={clickMe}>Click Me</button>
              </div>

              <em>Silahkan Otak Atik pada bagian variabelnya boleehhh</em>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hook6;
