import React from 'react'

function Home({ products }) {
    const { id, title, image} = products;
  return (
    <div>
      <h3>name {title}</h3>
    </div>
  )
}

export default Home
