import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Apı() {
  const [products, setProducts] = useState([]) //baş

  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  console.log(products)

  return (
    <div>
      {
        products?.map((product) => { //products diziyi döngüye alıyor ? tanımlımı diye bakıyo
          return <div key={product.id}>
            <p><img className='img' src={product.image} alt='product.title' /></p>
            <h2>{product.title}</h2>
            <button onClick={() => navigate("/product-details/" + product.id)}>detayına git</button>
            <br/><br/><br/>
          </div>
        })
      }
    </div>
  )
}

export default Apı
