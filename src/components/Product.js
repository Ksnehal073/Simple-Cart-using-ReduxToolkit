import React from 'react'
import { useState, useEffect } from 'react'
import {add} from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const Product = () => {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').
      then(res => res.json()).
      then(data => setProducts(data))

  }, [])

  const handleAdd = (product) =>{
    dispatch(add(product))
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={()=>handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Product
