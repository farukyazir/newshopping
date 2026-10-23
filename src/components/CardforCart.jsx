
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateQuantity,
  removeFromCart
} from '../reduxslices/cartSlice'

const CardforCart = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  // Calculate total quantity of all products
  const totalQuantity = cartItems.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  )

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, product) =>
      total + Number(product.price) * (product.quantity || 1),
    0
  )

  return (
    <>
      {cartItems.map((product) => {
        const quantity = product.quantity || 1
        const productTotal = Number(product.price) * quantity

        return (
          <div className="cartcard" key={product.id}>
            <div className="cartcard-details">

              <div className="card-innerdetails">
                <div className="productImg">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="product-details">
                  <h1>{product.title}</h1>

                  <p>
                    {product.status ? 'In Stock' : 'Out of Stock'}
                  </p>

                  <label htmlFor={`quantity-${product.id}`}>
                    Quantity:
                  </label>

                  <select
                    id={`quantity-${product.id}`}
                    value={quantity}
                    onChange={(e) => {
                      dispatch(
                        updateQuantity({
                          id: product.id,
                          quantity: Number(e.target.value)
                        })
                      )
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                      (number) => (
                        <option key={number} value={number}>
                          {number}
                        </option>
                      )
                    )}
                  </select>

                  <button
                    onClick={() =>
                      dispatch(removeFromCart(product.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="product-details1">
                <p>Price: ₹{product.price}</p>
                <p>Quantity: {quantity}</p>
                <p>Total: ₹{productTotal.toFixed(2)}</p>
              </div>

            </div>
          </div>
        )
      })}

      <div className="product-value">
        <div className="inner-value">
          <p>SUBTOTAL:</p>
          <p>₹{subtotal.toFixed(2)}</p>
        </div>

        <div className="inner-value">
          <p>TOTAL QUANTITY:</p>
          <p>{totalQuantity}</p>
        </div>

        <div className="inner-value">
          <p>SHIPPING:</p>
          <p>FREE</p>
        </div>

        <div className="inner-value">
          <p>TOTAL:</p>
          <p>₹{subtotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default CardforCart
