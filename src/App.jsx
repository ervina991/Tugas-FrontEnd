import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import Card from "./components/Card";
// import ShowTable from "./components/ShowTable";
import Nav from "./components/Nav";
import ReactState from "./components/ReactState";
// import InputMhs from "./components/InputMhs";
import Form from "./components/Form";

//untuk komponen app.jsx kita masukkan seluruh data yang sudah kita import dari komponen sebelumnya

const listHp = [
  {
    gambar: "https://d1n6dbtoa2690v.cloudfront.net/article/61653d84b42c2ed78516449d/61653d84b42c2ed78516449d_1648806797.webp",
    title: "Realme C31",
    content:
      "Realme C31 merupakan hp terbaru dari realme yang dibanderol harga terjangkau. Hp realme ini hadir dengan layar 6.5 inci dalam ukuran yang tipis, hanya 8.4mm. Realme C31 dibekali tiga kamera dengan sensor Sony yang terdiri dari kamera utama 13 MP, 2 MP dan 2 MP. Sedangkan kamera depannya memiliki resolusi 5 MP.realme C31 turut dilengkapi dengan sertifikasi TÜV Rheinland.",
  },
  {
    gambar: "https://d1n6dbtoa2690v.cloudfront.net/article/61650d31b42c2e15751644a2/61650d31b42c2e15751644a2_1649044856.webp",
    title: "OPPO A55",
    content:
      "OPPO A55 menawarkan desain dengan pola warna gradasi di bagian belakang, cocok untuk bergaya. Hp OPPO terbaru ini menawarkan layar berukuran 6,51 inci dengan resolusi HD+ yang mengusung konsep layar punch hole yang menyematkan kamera selfie 16 MP.",
  },
  {
    gambar: "https://d1n6dbtoa2690v.cloudfront.net/article/61655a89b42c2e538716449d/61655a89b42c2e538716449d_1648795756.webp",
    title: "Samsung Galaxy A13",
    content:
      "Hp terbaru yang sudah dirilis Samsung ke Indonesia adalah Galaxy A13. Hp Samsung terbaru ini hadir dengan fitur RAM Plus yang memungkinkan untuk menambah kapasitas RAM hingga 6 GB.",
  },
  {
    gambar: "https://d1n6dbtoa2690v.cloudfront.net/article/61655a89b42c2e538716449d/61655a89b42c2e538716449d_1648795780.webp",
    title: "Samsung Galaxy A23",
    content:
      "Hp terbaru dari Samsung lainnya ada Galaxy A23. Hp ini mengusung Infinity-V Display berukuran 6,6 inci dengan resolusi yang sudah Full HD+ dan refresh rate 90Hz.",
  },
  {
    gambar: "https://d1n6dbtoa2690v.cloudfront.net/article/615ec8c6b42c2e7ae38b456b/615ec8c6b42c2e7ae38b456b_1649133340.webp",
    title: "vivo Y21T",
    content:
      "vivo Y21T hadir dengan layar berukuran 6,51 inci dengan resolusi HD+. Layar ini mengusung konsep waterdrop yang didalamnya terpasang kamera depan 8 MP.",
  },
  {
    gambar: "https://d1n6dbtoa2690v.cloudfront.net/article/5c2ddf9eb92c2e646f8b45a5/5c2ddf9eb92c2e646f8b45a5_1643358363.webp",
    title: "Samsung Galaxy A03",
    content:
      "Samsung Galaxy A03 bisa menjadi pilihan untuk kamu yang mencari hp terbaru yang harganya terjangkau. Hp Samsung terbaru yang rilis di Januari 2022 ini memang dibanderol dengan harga yang merakyat.",
  },
  
];
// buat const yang berisi file gambar yang akan dimasukkan ke dalam kerangka komponen card

function App() {
  return (
    <div>
      <Nav />
      <div className="container mb-4 mt-4">
          
      </div>
      <div className="container">
        <div className="row">
          {listHp.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card
                gambar={agt.gambar}
                title={agt.title}
                content={agt.content}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div className="container">
        <h2>State</h2>
        <ReactState />
      </div>
    </div>
  );
}
//kita ketik function untuk memasukkan elemen jsx seperti input nav dan card
//kemudian buat div classname yang berisi elemen jsx react
export default App;