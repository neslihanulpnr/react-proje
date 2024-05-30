import React,  { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const { id } = useParams();


  return (
    <div>
      <p>Fiyat : </p>
    </div>
  )
}

export default Details
