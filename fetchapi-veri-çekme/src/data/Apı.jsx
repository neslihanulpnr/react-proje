import React, { useState } from 'react';

function Apı() {
  const [products, setProducts] = useState([]) //baş

  fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json())
  .then(json=>setProducts(json))
  console.log(products)


  return (
    <div>
      {
         products?.map((product) => { //products diziyi döngüye alıyor ? tanımlımı diye bakıyo
          return <div key={product.id}>
            <p><img style={{width: "200px", height: "200px"}} src={product.image} alt='product.title'/></p>
            <h2>{product.title}</h2>
            <button>detayına git</button>
            <br/><br/><br/>
          </div>
         })
      }
    </div>
  )
}

export default Apı
