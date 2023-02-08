import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'


const Cart = () => {
  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const removeItem = (product) => {
    dispatch(remove(product))
  }

  return (
    <div>
      <d iv className="cartWrapper">
        {
          items.map((product) => {
            return <div className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => removeItem(product.id)}>Remove</button>
            </div>
          })
        }
      </d>
    </div>
  )
}

export default Cart
