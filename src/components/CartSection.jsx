import React, { useContext } from 'react'
import { Cart } from '../Context';
import Product from './Product';

function CartSection() {
  const {cart,setCart} = useContext(Cart);
  return (
    <>
    <h4>Total Price: {cart.reduce((acc,curr)=> acc + Number(curr.price),0)}</h4>
    <div className='products_container'>
      {
        cart.map((item)=>{
          return <Product product={item} status={true}/>
        })
      }
    </div>
    </>
  )
}

export default CartSection
