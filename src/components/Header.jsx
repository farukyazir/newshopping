import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleCart } from '../reduxslices/cartSlice'

const Header = () => {
  const dispatch =useDispatch()
  const showCart = useSelector((state)=>state.cart.showCart)
  const cartCount = useSelector((state) => state.cart.cartCount)

  return (
    <div className='main-header'>
      <div className='header-logo'>
        <h1>LoGo</h1>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Shop</Link>
      </div>
      <div className='header-cart'>
        {showCart ? (<Link to="/cart" onClick={()=>dispatch(toggleCart())} className='cart-btn'><i className="fa-solid fa-cart-shopping" ></i>My Cart<span className='cart-count'>{cartCount}</span></Link>):
         (<Link to="/" onClick={()=>dispatch(toggleCart()) } className='products-btn'>Products</Link>
)}
      </div>
    </div>
  )
}

export default Header
