import React from 'react'
import styles from './ProductCard.module.scss'
const ProductBasket = ({item,removeItem}) => {
  return (
    <div className={styles.card}>
<img src={item.thumbnail} alt="photo" />
<p>{item.description}</p>
<p>{item.price}</p>
<p>{item.title}</p>
<button onClick={removeItem}>silll</button>

    </div>
  )
}

export default ProductBasket