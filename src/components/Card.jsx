
import React, { useContext } from 'react'
import MyContext from './MyContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../reduxslices/cartSlice'

const Card = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  const { productsData } = useContext(MyContext)

  return (
    <div className='card-container'>
      {
        productsData.products.map((product) => {
          const isClicked = cartItems.some(
            (item) => item.id === product.id
          )

          return (
            <div className='card-details' key={product.id}>
              <img
                src={product.image}
                className='cardimg'
                alt={product.title}
              />

              <h1>{product.title}</h1>
              <p>₹{product.price}</p>

              {
                isClicked ? (
                  <button className='removeBtn'
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button className='addBtn'
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Card
