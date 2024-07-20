import { memo } from "react"

function Hook4b(prop) {

    console.log('4b rendered')
    // ini pada bagian renderednya
    // kalo dibiarin terus bakalan berat halaman filenya
    // makanya pada bagian button gantiNama

    
    return (

        <>
        <div className="left">
            <h3>Disini file 4bnya kita masukin ke 4a</h3>
            <h3>Ini dari 4bnya</h3>
            <h3>{prop.nama}</h3>    
            <p>nama 4b redered akan ditampilkan setelaah terjadi perubahan pda codingan</p>
            <li>nah berikutnya setelah kita klik pada bagian gantinama makan akan muncul rederednya</li>
            <li>kalo kita klik pada bagian nilai bertambah maka si 4b renderenya tidak muncul</li>
            <b>inget lagi nge ini itu fungsinya buat meninimalisir file</b>
            <li>hapus pada bagian memo(hook4) untuk melihat perbedaannya</li>

            <li>penambahan memo itu diisi pada pada bagian akhir codingan</li>
            
        </div>
        </>
    )
}
export default  memo(Hook4b)
// export default Hook4b
// pada bagian akhir ini kita kasih memo untuk meminimalisir file
// agar tidak berat si halaman