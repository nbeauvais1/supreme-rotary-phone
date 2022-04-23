import React from 'react';
import Image from 'next/image'
import {productCard, image, name, price, description, button} from './styles.module.css'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, productDesc, uid, imageUrl} = {...product}

  return (
        <aside className={productCard}>
          <header>
            <Image            
              src={imageUrl}
              alt={productName}
              width={600}
              height={400}
            />
          </header>
          <p className={name}>{productName}</p>
          <p className={price}>${productPrice}</p>
          <p className={description}>{productDesc}</p>
          <footer>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="uid" value={uid} />
              <button type="submit" className={button}>Buy Now!</button>
            </form>
          </footer>
        </aside>
  )
}

export default ProductCard