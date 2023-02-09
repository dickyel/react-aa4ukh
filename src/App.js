import React from 'react';
import './style.css';

function App() {
  return (
    <div className="Header-box">
      <FotoProduct />
      <ProductInfo isDiscount="coming" title="NIKE " category="SEPATU" />
    </div>
  );
}

function FotoProduct() {
  return (
    <div className="Foto">
      <img
        src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5824.png"
        alt=""
      />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == 'yes') {
    return <p>Ada Diskon 50%</p>;
  } else if (isDiscount == 'coming') {
    return <p>Diskon Akan segera datang</p>;
  } else {
    return <p>Belum Diskon</p>;
  }
}

function ProductInfo(props) {
  const { category } = props;
  const price = 2000000;
  const benefits = ['Kualitas Terjamin', 'Murah', 'Tidak Murahan'];
  const listBenefits = benefits.map((item) => <li>{item}</li>);
  const { title, isDiscount } = props;

  return (
    <div>
      <div className="Deskripsi">
        <p className="Description-title">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="Price">{price}</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(tambah) => TambahProduct(title, tambah)} href="">
          Tambahkan Ke Keranjang
        </a>
      </div>
    </div>
  );
}

function TambahProduct(tambah) {
  console.log('Tambah Produk....' + tambah);
}

export default App;
