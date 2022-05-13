import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import Product from './Product';

function Home() {
   faker.seed(21)
  /*======================== Fake Products Data Created ============================ */
  const productsData = [...Array(21)].map(()=> ({
     id: faker.datatype.uuid(),
     name: faker.commerce.productName(),
     price : faker.commerce.price(),
     image : faker.random.image()
  }))

  console.log(productsData)

  /*================================================================================= */

   const [products] = useState(productsData);

  return (
    <div className='products_container'>
      {
        products.map((product)=>{
          return <Product product={product}/>
        })
      }
    </div>
  )
}

export default Home
