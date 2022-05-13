import React, { useContext } from 'react'
import { Cart } from '../Context';

function Product({product,status}) {
  const {cart,setCart} =  useContext(Cart);
  console.log("Cart : ",cart)
  return (
    <div className='product_container'>
      <div className="product_img">
          <img src={product.image} alt="jproduct_img"  width="70%"/>
      </div>
      <div className="product_desc">
          <h4>{product.name}</h4>
          <p>Price: {product.price.slice(0,3)}</p>
      </div>
      {
          status === true ? <button className='addBtn' onClick={()=>setCart(cart.filter((item)=> item.id !== product.id))}>Remove from Cart</button> :<button className='addBtn' onClick={()=>setCart([...cart,product])}>Add To Cart</button>
      }
      
    </div>
  )
}

export default Product
