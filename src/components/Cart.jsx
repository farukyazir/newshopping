import React, { useContext, useState } from 'react'
import CardforCart from './CardforCart'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {
  const dispatch = useDispatch()
  const cartState =useSelector((state)=>state.cart.cartState)
  return (
    <div>
      {
        cartState ? (<><CardforCart/></>) :
         (<><div className='empty-cart'><img src='src\assets\ChatGPT Image Oct 7, 2026, 12_17_10 PM.png'/></div></>)
      }


    </div>
    
  )
}

export default Cart
